import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";

function EditSkills() {
  let history = useHistory();
  const location = useLocation();
  let { id } = useParams();
  console.log(location);
  const [skillName, setSkillName] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (location && location.state) {
      setSkillName(location.state.data.skills_name);
    }
  }, [location]);

  const submitData = async (e) => {
    e.preventDefault();
    const data = {
      skills_name: skillName,
      status_name: status,
    };
    history.push({
      pathname: "/userskills",
      state: { data: data },
    });
    // history.push("/userskills");
  };
  return (
    <div className="formStyle">
      <form>
        <label>Skills Name:</label>
        <input
          type="text"
          name="skills_name"
          onChange={(e) => setSkillName(e.target.value)}
          value={skillName}
        />
        <br />
        <br />
        <label>status</label>
        <select
          name="status_name"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        >
          <option value="status">Select Status</option>
          <option value="2">Inactive</option>
          <option value="1">Active</option>
        </select>
        <Link to="/userskills" className="ui green button" onClick={submitData}>
          Update
        </Link>
      </form>
    </div>
  );
}
export default EditSkills;
