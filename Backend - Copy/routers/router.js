const {MongoClient} =require('mongodb');
const express = require('express') 
const { db } = require('../model/book');
const router = express.Router();
const book = require('../model/book');

const db_url="mongodb+srv://prasaddurga2031:1234@apollo.c8epxx7.mongodb.net/?retryWrites=true&w=majority";

router.post('/postdata', async(req,res)=>{
    let EmergencyCases;
    try{
        EmergencyCases = new book({
            name:req.body.name,
            rollno:req.body.rollno,
            problem:req.body.problem,
        })
        await EmergencyCases.save();
    }catch (err){
        console.log(err);
    }
    if(!EmergencyCases){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({EmergencyCases})
})

router.get("/getdata",(request,response)=>{
    MongoClient.connect(db_url,(err,db)=>{
        if (err) throw err;
        const dbo=db.db('Apollo');
        dbo.collection('MedicineData').find({}).toArray((err,res)=>{
            if (err) throw err;
            response.send(res);
            db.close();
        });
    })
});




module.exports= router;