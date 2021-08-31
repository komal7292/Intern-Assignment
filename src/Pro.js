import React, { useState, useEffect } from "react";
import axios from "axios";

function Pro() {
  const [myData, setMyData] = useState([]);
  function getData() {
    axios
      .get(
        "https://develop.hipoz.com/api/userprofile?type=Student&user_id=1026"
      )
      .then((response) => {
        // setMyData(response);
        console.log(response.data.data);
        setMyData(response.data.data[0]);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="getStyle">
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>DOB</th>
            <th>Phone Num</th>
          </tr>
        </thead>
        <tbody>
          {[myData].map((data, index)=>  {
            return (
              <tr key={index}>
                <td>{data.user_first_name}</td>
                <td>{data.user_last_name}</td>
                <td>{data.email_id}</td>
                <td>{data.date_of_birth}</td>
                <td>{data.mobile_number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Pro;
