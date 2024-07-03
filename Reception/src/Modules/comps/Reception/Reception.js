import React from "react";
import { Card, RadioGroup } from "@mui/material";
import { Modal } from "react-bootstrap";
import Button from "@mui/material/Button";
import "./recp.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function ReceptionData() {
  const [show1, setShow1] = useState(false);
  const modalClose1 = () => setShow1(false);
  const modalShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const modalClose2 = () => setShow2(false);
  const modalShow2 = () => setShow2(true);

  const [send, setSend] = useState({
    name: "",
    rollno: "",
    college: "",
    age: "",
    gender: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setSend((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const postSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/postpatient", { send })
      .then((res) => setSend(res.data.books));
    alert("data sent");
    setShow1(false);
  };

  let studentdetails =
    ({
      id: "20MH1A0424",
      rollno: "20MH1A0424",
      department: "ECE",
      college: "ACOE",
    },
    {
      id: "20MH1A0483",
      rollno: "20MH1A0483",
      department: "ECE",
      college: "ACOE",
    },
    {
      id: "20MH1A04C3",
      rollno: "20MH1A04C3",
      department: "ECE",
      college: "ACOE",
    });

  let patientlist = (
    <div>
      <table border="1">
        <th>PATIENT NAME</th>
        <th>REASON FOR VISIT</th>
        <th>MEDICINES ISSUED</th>

        <tr border="1">
          <td>RAM CHANDAR</td>
          <td>DR.AMARNADH(CARDIOLOGIST)</td>
        </tr>
        <tr border="1">
          <td>SANJAY</td>
          <td>DR.DURGAPRASAD(DENTIST)</td>
        </tr>
        <tr border="1">
          <td>CHINNA</td>
          <td>DR.RATNAM(PEDIATRICIAN)</td>
        </tr>
        <tr border="1">
          <td>SHANKAR</td>
          <td>DR.SIVAPRASAD(ENT SPECIALIST)</td>
        </tr>
        <tr border="1">
          <td>LAKSHMI</td>
          <td>DR.SAITEJA(ONCOLOGIST)</td>
        </tr>
        <tr border="1">
          <td>NARENDRA</td>
          <td>DR.RADHA (NEUROLOGIST)</td>
        </tr>
      </table>
    </div>
  );

  let detailstab = (
    <div>
      <Card id="card1">
        {/* <input placeholder="SCAN ID HERE"></input><br/><br/>
      <input type="submit"></input>
      <div id="scaniddiv"></div> */}
      </Card>
    </div>
  );

  return (
    <div id="div1" style={{ height: "100vh", width: "100%" }}>
      <div
        style={{
          height: "100vh",
          width: "50%",
          float: "left",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
        }}
      >
        <Card
          variant="outlined"
          style={{
            height: "250px",
            width: "250px",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px 0px black",
          }}
        >
          <h2 style={{ marginTop: "40px" }}>ADD OP</h2>
          <Button
            variant="contained"
            style={{ marginTop: "40px" }}
            onClick={modalShow1}
          >
            ADD
          </Button>
        </Card>
      </div>
      <div
        style={{
          height: "100vh",
          width: "50%",
          float: "left",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
        }}
      >
        <Card
          variant="outlined"
          style={{
            height: "250px",
            width: "250px",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px 0px black",
          }}
        >
          <h2 style={{ marginTop: "40px" }}>PATIENTS LIST</h2>
          <Link to="/displaypatient">
            <Button variant="contained" style={{ marginTop: "40px" }}>
              GET DETAILS
            </Button>
          </Link>
        </Card>
      </div>
      <Modal show={show1} onHide={modalClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Generation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {detailstab}

          <form>
            <input
              type="text"
              name="name"
              required="required"
              placeholder="enter name"
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="rollno"
              required="required"
              placeholder="enter rollno"
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="college"
              required="required"
              placeholder="enter college "
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="age"
              required="required"
              placeholder="enter age"
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="gender"
              required="required"
              placeholder="gender"
              onChange={handleChange}
            ></input>
            <br />
            <br />
            <input
              type="text"
              name="mobile"
              required="required"
              placeholder="mobile number"
              onChange={handleChange}
            ></input>
            <br />
            <br />
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose1}>
            CLEAR DETAILS
          </Button>
          <Button variant="primary" onClick={postSubmit}>
            BOOK AN APPOINTMENT
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ReceptionData;
