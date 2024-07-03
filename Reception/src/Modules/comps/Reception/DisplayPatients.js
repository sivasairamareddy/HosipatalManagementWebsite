import React, { useState, useEffect, Fragment } from "react";
import "./recp.css";
import { nanoid } from "nanoid";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const DisplayPatients = () => {
  const [contacts, setcontacts] = useState();
  const [contact, setcontact] = useState({
    fullName: "",
    college: "",
    department: "",
    section: "",
    reason: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    college: "",
    department: "",
    section: "",
    reason: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...contact };
    newFormData[fieldName] = fieldValue;
    setcontact(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: contact.fullName,
      college: contact.college,
      department: contact.department,
      section: contact.section,
      reason: contact.reason,
    };

    const newContacts = [...contacts, newContact];
    setcontacts(newContacts);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      fullName: contact.fullName,
      college: contact.college,
      department: contact.department,
      section: contact.section,
      reason: contact.reason,
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      college: editFormData.college,
      department: editFormData.department,
      section: editFormData.section,
      reason: editFormData.reason,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setcontacts(newContacts);
    setEditContactId(null);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setcontacts(newContacts);
  };

  const [datam, setDatam] = useState([]);
  const getUser = async () => {
    const response = await fetch("http://localhost:5000/getdatapatient", {
      method: "GET",
    });
    const data = await response.json();
    setDatam(data);
    console.log(data);
    //console.log(userss);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <br />
      <div id="r1">
        <form onSubmit={handleEditFormSubmit}>
          <div className="table-responsive">
            <table
              border={2}
              className="table table-bordered"
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
                  <th>name</th>
                  <th>rollno</th>
                  <th>college</th>
                  <th>age</th>
                  <th>gender</th>
                  <th>Mobile</th>
                </tr>
              </thead>

              <tbody>
                {datam.map((item, i) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.rollno}</td>
                      <td>{item.college}</td>
                      <td>{item.age}</td>
                      <td>{item.gender}</td>
                      <td>{item.mobile}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export default DisplayPatients;
