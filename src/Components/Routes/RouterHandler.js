import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Docs from "../Docs/Docs";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

export default function RouterHandler() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/docs" component={Docs}></Route>
            <Route exact path="/tutorial" component={Home}></Route>
            <Route exact path="/Blog" component={Home}></Route>
            <Route exact path="/Community" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
