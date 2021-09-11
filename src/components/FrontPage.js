import { useHistory } from "react-router-dom";

function FrontPage() {
  let history = useHistory();

  function clickedLogin() {
    history.push("./login");
  }

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <h1>All Form Data</h1>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03"> 
            <form className="d-flex"></form>
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={clickedLogin}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
export default FrontPage;
