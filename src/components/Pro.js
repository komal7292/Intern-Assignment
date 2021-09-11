import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

function Pro() {
  let history = useHistory();

  const [myData, setMyData] = useState([]);
  function getData() {
    axios
      .get(
        "https://develop.hipoz.com/api/userprofile?type=Student&user_id=1073"
      )
      .then((response) => {
        setMyData(response.data.data[0]);
        console.log("komal", response.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  function getSkills() {
    console.log("clicked");
    history.push('./userskills')
  }

  return (
    <div className="getStyle">
      <div>
        <label>FirstName: {myData.user_first_name}</label>
      </div>
      <div>
        <label>LastName: {myData.user_last_name}</label>
      </div>
      <div>
        <label>Email: {myData.email_id}</label>
      </div>
      <div>
        <label>DOB: {myData.date_of_birth}</label>
      </div>
      <div>
        <label>Mobile Num.: {myData.mobile_number}</label>
      </div>
      <button className="btn btn-primary" onClick={getSkills}>
        Skills
      </button>
    </div>
  );
}
export default Pro;
