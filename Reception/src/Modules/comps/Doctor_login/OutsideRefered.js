import "./OutsideRefered.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import DateObject from "react-date-object";

export default function OutsideRefered() {
  let [OutData, SetOutData] = useState([]);

  const getUser = async () => {
    const response = await fetch("http://localhost:5000/getOutdata", {
      method: "GET",
    });
    const data = await response.json();
    SetOutData(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const [show, setShow] = useState(true);
  const modalClose = () => setShow(false);

  const [show1, setShow1] = useState(false);
  const modalClose1 = () => setShow1(false);
  const modalShow1 = () => setShow1(true);

  let [val, setVal] = useState("");

  const Handle = () => {
    let arr = val.split("-");
    alert(arr);
  };

  var date = new DateObject();
  let [Date, SetDate] = useState(date.format());
  let dumpDate = date.format();

  let [data, SetData] = useState({
    rollno: "",
    name: "",
    problem: "",
    date: dumpDate,
  });

  const HandleForm = (e) => {
    SetData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const postSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:5000/postoutside", { data })
      .then((res) => SetData(res.data.books));
    setShow1(false);
    window.location.reload();
  };

  let t = {
    textAlign: "left",
  };

  function myFunction() {
    var input, filter, tr, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    tr = document.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[0];
      var txtValue = td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  return (
    <>
      <div>
        <br />
        <Link to="/doctor">
          <button
            className="button"
            style={{
              width: "60px",
              height: "30px",
              textAlign: "center",
              padding: "2px",
              margin: "0px 0px 0px 5px",
            }}
          >
            Back
          </button>
        </Link>
        <button onClick={modalShow1} className="button ">
          Generate New
        </button>
        <div className="main">
          {/* <div class="input-group">
            <div class="form-outline">
              <input type="search" id="form1" class="form-control" />
              <label class="form-label" for="form1">
                Search
              </label>
            </div>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
          </div> */}
          <label htmlFor="input" onClick={Handle}>
            <FaSearch id="icon" />
          </label>
          <input
            type="text"
            id="input"
            placeholder="YYYY/MM/DD"
            onKeyUp={myFunction}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="container table-responsive">
        <table
          class="table table-lg table-stripped table-bordered"
          style={{
            background: "white",
            boxShadow: "0px 4px 5px 0px black",
          }}
        >
          <thead
            style={{
              background: "black",
              color: "white",
              borderColor: "black",
            }}
          >
            <tr>
              <th style={t} scope="col">
                Date
              </th>
              <th style={t} scope="col">
                Pin Number
              </th>
              <th style={t} scope="col">
                Name
              </th>
              <th style={t} scope="col">
                Problem
              </th>
            </tr>
          </thead>
          <tbody>
            {OutData.map((e) => {
              return (
                <>
                  <tr className="body">
                    <td style={t}>{e.date}</td>
                    <td style={t}>{e.rollno}</td>
                    <td style={t}>{e.name}</td>
                    <td style={t}>{e.problem}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={modalClose}>
        <Modal.Body>
          <p style={{ color: "black", fontFamily: "monospace" }}>
            Enter Date to get Details
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

      <Modal show={show1} onHide={modalClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Generate New Patient</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  id="rollno"
                  placeholder="Roll No "
                  name="rollno"
                  onChange={HandleForm}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  onChange={HandleForm}
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  id="problem"
                  name="problem"
                  placeholder="Enter Problem"
                  onChange={HandleForm}
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={postSubmit}
              >
                Generate
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
