import React, { useState } from "react";
import "./Nav.css"


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  
  const storeUser = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setEmailErr(true);
      setPwdError(true);
    } else {
      const users = JSON.parse(localStorage.getItem("users"));
      if (!users) {
        localStorage.setItem(
          "users",
          JSON.stringify([
            { username: name, useremail: email, userpassword: password },
          ])
        );
        window.location.assign("/card");
      } else {
        localStorage.setItem(
          "users",
          JSON.stringify([
            ...users,
            { username: name, useremail: email, userpassword: password },
          ])
        );
        window.location.assign("/card");
      }
    }
  };
  return (
    <div>
      <div className="container">
        <form className="ui form" onSubmit={storeUser}>
          <h2> Register </h2>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="joe@schmoe.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && <p style={{ color: "red" }}>Your email is invalid</p>}
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {pwdError && (
              <p style={{ color: "red" }}>Your password is invalid</p>
            )}
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;




