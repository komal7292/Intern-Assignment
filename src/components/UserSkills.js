import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function UserSkills() {
  const [data, setData] = useState([]);
  let history = useHistory();

  function getUserSkills() {
    axios
      .get("https://develop.hipoz.com/api/skills?skill_id=0&status_id=0")
      .then((response) => {
        // console.log(response.data.data);
        setData(response.data.data);
      });
  }
  useEffect(() => {
    getUserSkills();
  }, []);

  function addSkills() {
    history.push("./addskills");
  }
  function selectUser(data) {
    history.push({
      pathname: `/editskills/${data.skills_id}`,
      state: { data: data },
    });
    console.log(data);
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Skills List</h1>
      <button
        className="button btn-danger"
        style={{ marginTop: "20px", marginLeft: "60px" }}
        onClick={addSkills}
      >
        Add Skills
      </button>
      <table className="ui container celled table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Skills Name</th>
            <th>Skills Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, i) => {
            return (
              <tr key={i}>
                <td data-label="Name">{items.skills_id}</td>
                <td data-label="Name">{items.skills_name}</td>
                <td data-label="Age">{items.status_name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => selectUser(items)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default UserSkills;
