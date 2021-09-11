import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddSkills() {
  let history = useHistory();
  const [skillName, setSkillName] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  function submitData(event) {
    event.preventDefault();
    const param = {
      skills_id: 0,
      skills_name: skillName,
      status_enum_id: status,
      updatedby: 1,
      role_expectation_id: 1,
    };
    axios
      .post("https://develop.hipoz.com/api/addupdateskills", param)
      .then((response) => {
        setData(response);
        console.log(data);
      });
    history.push("./userskills");
  }
  return (
    <div className="formStyle">
      <form>
        <label>Skills Name: </label>
        <input
          type="text"
          name="skillName"
          onChange={(e) => setSkillName(e.target.value)}
          value={skillName}
        />
        <br />
        <br />
        <label>status</label>
        <select
          id="status"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        >
          <option value="status">Select Status</option>
          <option value="2">Inactive</option>
          <option value="1">Active</option>
        </select>
        <button type="submit" onClick={submitData}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default AddSkills;
