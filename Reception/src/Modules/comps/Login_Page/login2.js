import React, { useState } from "react";
import Doctor from "../Doctor_login/doctor";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import App from "../../../App";
import ReceptionData from "../Reception/Reception";
function Login2() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginType, setLoginType] = useState("");
  const database = [
    {
      username: "user1",
      password: "pass1",
      type: "admin",
    },
    {
      username: "user2",
      password: "pass2",
      type: "user",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setLoginType(userData.type);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div id="body">
      <div id="login">
        <form className="login" onSubmit={handleSubmit}>
          <img
            src="https://www.apolloshinefoundation.org/wp-content/uploads/2021/04/logo.png"
            style={{
              width: "140px",
              height: "50px",
              margin: "20px 0px 40px 80px",
            }}
          />
          <div className="form-group">
            <label htmlFor="user">
              <FaUser />
            </label>
            <input
              placeholder="Username"
              type="text"
              required
              id="user"
              name="uname"
            />
          </div>
          {renderErrorMessage("uname")}
          <div className="form-group">
            <label htmlFor="password">
              <FaLock />
            </label>
            <input
              placeholder="Password"
              type="password"
              required
              id="password"
              name="pass"
            />
          </div>
          {renderErrorMessage("pass")}
          <button type="submit" className="btn btn-primary" value="Login">
            Login
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      {isSubmitted ? (
        <div>
          <ReceptionData />
        </div>
      ) : (
        <div className="app">{renderForm}</div>
      )}
    </>
  );
}

export default Login2;
