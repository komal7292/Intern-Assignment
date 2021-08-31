import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Pro from "./Pro";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/pro" component={Pro} />
        <Route exact path="/login" component={Login} />
        <Pro />
        <Login />
      </Switch>
    </Router>
  );
}
export default App;
