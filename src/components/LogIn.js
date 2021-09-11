import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Style.css";

function LogIn() {
  const [email_id, setEmail_id] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  let history = useHistory();

  function submitHandler(e) {
    e.preventDefault();
    const postData = {
      email_id,
      password,
    };
    axios
      .post("https://develop.hipoz.com/api/commanloginuser", postData)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(email_id, password);
        // console.log(data);
        if (postData.email_id === "" && postData.password === "") {
          window.alert("Fill the blanks fields");
        } else if (data.statuscode === 422) {
          window.alert("Fill the correct email and password");
        } else {
          history.push("./pro");
        }
      });
  }
  // console.log(data);
  return (
    <div>
      <h1 className="heading">Login ID and Password</h1>
      <div className="formStyle">
        <label>Email: </label>
        <input
          type="email"
          name="email_id"
          value={email_id}
          onChange={(e) => setEmail_id(e.target.value)}
        ></input>
        <br />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" className="button" onClick={submitHandler}>
          Login
        </button>
      </div>
    </div>
  );
}
export default LogIn;
