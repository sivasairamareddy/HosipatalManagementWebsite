const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const app = express();

app.use(bodyParser.json());

//---------------------------------------------------------------Connecting to Database
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://prasaddurga2031:1234@apollo.c8epxx7.mongodb.net/Apollo"
  );
  console.log("Database is Connected!");
}

app.use(cors());
app.use(express.json());

//------------------------------------------------------------------------------Emergency Data

const Outside = new mongoose.Schema({
  rollno: String,
  name: String,
  problem: String,
  date: String,
});

const Out = mongoose.model("Emergency", Outside);

//Inserting data into Collection
app.post("/postoutside", async (req, res) => {
  let user = new Out();
  user.rollno = req.body.data.rollno;
  user.name = req.body.data.name;
  user.problem = req.body.data.problem;
  user.date = req.body.data.date;
  const doc = await user.save();
  console.log(doc);
  res.json(req.body);
});

app.get("/getOutdata", async (req, res) => {
  // let user=new Users()
  // user.name='nithin';
  // user.type='rrr';
  // user.quantity='45';
  // let k=await user.save();
  // console.log(k);
  const docs = await Out.find({});
  res.json(docs);
  console.log(docs);
});

//-------------------------------------------------------------------------------- medicine data

const Sch = new mongoose.Schema({
  name: String,
  type: String,
  quantity: String,
});

const Users = mongoose.model("MedicineData", Sch);

app.post("/postmed", async (req, res) => {
  let user = new Users();
  user.name = req.body.upmed.upname;
  user.type = req.body.upmed.uptype;
  user.quantity = req.body.upmed.upquantity;
  const doc = await user.save();
  console.log(doc);
  res.json(req.body);
});

// app.get("/updatemed", async (req, res) => {
//   const upd = await Users.updateOne(
//     { username: "Dolo" },
//     { $set: { quantity: "100" } }
//   );
//   console.log(upd);
//   console.log("done");
//   res.json(upd);
// });

app.get("/getdata", async (req, res) => {
  // let user=new Users()
  // user.name='nithin';
  // user.type='rrr';
  // user.quantity='45';
  // let k=await user.save();
  // console.log(k);
  const docs = await Users.find({});
  res.json(docs);
  console.log(docs);
});

//-----------------------------------------------------------------------Patient Data

const Pat = new mongoose.Schema({
  name: String,
  rollno: String,
  college: String,
  age: String,
  gender: String,
  mobile: String,
});

const Patient = mongoose.model("books", Pat);

app.get("/getdatapatient", async (req, res) => {
  // let user=new Users()
  // user.name='nithin';
  // user.type='rrr';
  // user.quantity='45';
  // let k=await user.save();
  // console.log(k);
  const docs = await Patient.find({});
  res.json(docs);
  console.log(docs);
});

app.post("/postpatient", async (req, res) => {
  let user = new Patient();
  user.name = req.body.send.name;
  user.rollno = req.body.send.rollno;
  user.college = req.body.send.college;
  user.age = req.body.send.age;
  user.gender = req.body.send.gender;
  user.mobile = req.body.send.mobile;
  const doc = await user.save();
  console.log(doc);
  res.json(req.body);
});

app.listen(5000, () => console.log("The Server is Running..............."));
