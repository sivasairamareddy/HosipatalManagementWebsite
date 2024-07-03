import "./PatientDetails.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function PatientDeatils() {
  const [show, setShow] = useState(true);
  const modalClose = () => setShow(false);

  let [DisStData, setDisStData] = useState([
    {
      date: "",
      problem: "",
      medicineGiven: "",
    },
  ]);

  let [val, setVal] = useState("");

  let [Temp, setTemp] = useState({
    name: "",
    rollno: "",
    college: "",
    age: "",
    gender: "",
    mobile: "",
  });
  const Handle = () => {
    let arr = val.toLocaleLowerCase();
    alert(arr);
    for (let index = 0; index < DisStData.length; index++) {
      if (DisStData[index].rollno.toLocaleLowerCase() == arr) {
        console.log(DisStData[index]);
        setTemp(DisStData[index]);
        console.log(DisStData[index]);
      }
    }
    {
      console.log(DisStData);
    }
  };

  const getUser = async () => {
    const response = await fetch("http://localhost:5000/getdatapatient", {
      method: "GET",
    });
    const data = await response.json();
    setDisStData(data);
    console.log(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <br />
      <Link to="/doctor">
        <button
          className="button"
          style={{
            width: "60px",
            height: "30px",
            textAlign: "center",
            padding: "2px",
            margin: "0px 5px 0px 0px",
          }}
        >
          Back
        </button>
      </Link>
      <br />
      <br />
      <div className="main">
        {/* <InputGroup id="search">
          <Form.Control
            aria-label="Dollar amount (with dot and two decimal places)"
            id="input"
            placeholder="search "
          />
          <Button style={{ width: "60px" }}>
            <FaSearch />
          </Button>
        </InputGroup> */}
        <label htmlFor="input" onClick={Handle}>
          <FaSearch />
        </label>
        <input
          type="text"
          id="input"
          placeholder="Pin Number"
          onChange={(e) => setVal(e.target.value)}
        />
      </div>

      <div className="Stdetails">
        <div className="discard1">
          {/* <div
            style={{
              border: "2px solid black",
              width: "100px",
              height: "100px",
              background: "lightgrey",
              borderRadius: "50%",
            }}
          ></div> */}
          <br />
          <h5>{Temp.name.toLocaleUpperCase()}</h5>
          <hr />
          <h6>
            <b>Pin ID</b> : {Temp.rollno.toLocaleUpperCase()}
          </h6>
        </div>
        <div className="discard2">
          <h5>General Information</h5>
          <br />
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <b>College</b>
                </td>
                <td>:</td>
                <td>{Temp.college}</td>
              </tr>
              <tr>
                <td>
                  <b>Age</b>
                </td>
                <td>:</td>
                <td>{Temp.age}</td>
              </tr>
              <tr>
                <td>
                  <b>Gender</b>
                </td>
                <td>:</td>
                <td>{Temp.gender}</td>
              </tr>
              <tr>
                <td>
                  <b>Mobile</b>
                </td>
                <td>:</td>
                <td>{Temp.mobile}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={modalClose}>
        <Modal.Body>
          <p style={{ color: "black", fontFamily: "monospace" }}>
            Enter Pin Number to get Student Details
          </p>
          <Button
            style={{ height: "40px", float: "right" }}
            variant="secondary"
            onClick={modalClose}
          >
            Click to search
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
