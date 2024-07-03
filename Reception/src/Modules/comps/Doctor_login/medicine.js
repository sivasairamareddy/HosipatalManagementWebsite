import "./medicine.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function MedicineData() {
  const [show1, setShow1] = useState(false);
  const modalClose1 = () => setShow1(false);
  const modalShow1 = () => setShow1(true);

  let [data, setData] = useState([]);

  const getUser = async () => {
    const response = await fetch("http://localhost:5000/getdata", {
      method: "GET",
    });
    const data = await response.json();
    setData(data);
    for (let index = 0; index < data.length; index++) {
      if (data[index].quantity < 10) {
        // alert(data[index].name+" Availble Stock is "+data[index].quantity+" nets, Please Update Stock")
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  let [popupData, setpopupData] = useState({
    name: "",
    type: "",
    quantity: "",
  });

  const [show, setShow] = useState(false);
  const modalClose = () => setShow(false);
  const modalShow = (prop) => {
    setpopupData(prop);
    setShow(true);
  };

  const ModalData = () => {
    return (
      <div className="modalCard">
        <table>
          <tr>
            <td>Name </td>
            <td>: {popupData.name}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>: {popupData.type}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>: {popupData.quantity}</td>
          </tr>
        </table>
      </div>
    );
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

  let [upmed, setupmed] = useState({
    upname: "",
    uptype: "",
    upquantity: "",
  });

  const HandleForm = (e) => {
    setupmed((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const update = (e) => {
    e.preventDefault();
    axios
      .update("http://localhost:5000/updatemed", { data })
      .then((res) => setupmed(res.data.books));
    window.location.reload();
  };

  const postSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:5000/postmed", { upmed })
      .then((res) => setupmed(res.upmed.books));
    setShow1(false);
    window.location.reload();
  };

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
            margin: "0px 0px 0px 5px",
          }}
        >
          Back
        </button>
      </Link>
      <button className="button" onClick={modalShow1}>
        Generate New
      </button>
      <div className="main">
        <label htmlFor="input">
          <FaSearch id="icon" />
        </label>
        <input
          type="text"
          id="input"
          placeholder="Enter Name"
          onKeyUp={myFunction}
        />
      </div>
      <br />
      <div
        className="container table-responsive"
        style={{
          borderRadius: "5px",
        }}
      >
        <table
          class="table table-bordered"
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
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody className="table">
            {data.map((e) => {
              return (
                <>
                  <tr className="body" onClick={() => modalShow(e)}>
                    <td>{e.name}</td>
                    <td>{e.type}</td>
                    <td>{e.quantity} nets</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={modalClose}>
        <Modal.Body>{ModalData()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={modalClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Add Medicine Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  id="rollno"
                  placeholder="Name Of Medicine"
                  name="upname"
                  onChange={HandleForm}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder="Type Of Medicine"
                  name="uptype"
                  onChange={HandleForm}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder="Quantity of Medicine"
                  name="upquantity"
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
