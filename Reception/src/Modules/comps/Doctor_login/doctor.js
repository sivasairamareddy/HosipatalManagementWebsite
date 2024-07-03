import "./doctor.css";
import { useState } from "react";
import { FaDoorOpen } from "react-icons/fa";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { Modal } from "react-bootstrap";

export default function Doctor() {
  const [show, setShow] = useState(false);
  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);
  const Logout = () => {
    window.location.href = "/login";
    localStorage.clear();
  };
  return (
    <div>
      <h5 id="userDetails">
        <Link href="/login">
          <button onClick={Logout}>logout</button>
        </Link>
      </h5>
      <div className="cards">
        <div className="card">
          <br />
          <br />
          <h4>Patient Details</h4>
          <img
            src="https://thumbs.dreamstime.com/b/black-solid-icon-boy-patient-boy-patient-logo-pills-medical-black-solid-icon-boy-patient-pills-medical-147675883.jpg"
            style={{ width: "200px", height: "200px" }}
          />
          <Link href="/patientData">
            <Button className="btn" variant="contained">
              Get Details
            </Button>
          </Link>
        </div>
        <div className="card">
          <br />
          <br />
          <h4>Medicines Register</h4>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUJHLUaQx8gENaQHyJIiJxyE5cHWXl2lZBg&usqp=CAU"
            style={{ width: "200px", height: "200px" }}
          />
          <Link href="/medicinedata">
            <Button className="btn" variant="contained">
              Check Availability
            </Button>
          </Link>
        </div>
        <div className="card">
          <br />
          <br />
          <h4>Outside Referenced</h4>
          <img
            src="https://img.freepik.com/premium-vector/emergency-word-concept-with-red-siren-illustration_624938-731.jpg"
            style={{ width: "200px", height: "200px" }}
          />
          <Link href="/outsideRefered">
            <Button className="btn" variant="contained">
              Get Pervious Data
            </Button>
          </Link>
        </div>
      </div>

      <Modal show={show} onHide={modalClose}>
        <Modal.Body>
          <p>Enter Pin Number of Student to get Details</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close Modal
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
