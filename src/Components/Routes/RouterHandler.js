//external import files
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//internal import files
import Navbar from "../Navbar/Navbar";
import Docs from "../../pages/Docs/Docs";
import Home from "../../pages/Home/Home";
import Tutorial from "../../pages/Tutorial/Tutorial";
import Blog from "../../pages/Blog/Blog";
import Community from "../../pages/Community/Community";
import Version from "../../pages/version/Version";
import Languages from "../../pages/Languages/Lnaguages";

export default function RouterHandler() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/docs" component={Docs} />
        <Route exact path="/tutorial" component={Tutorial}></Route>
        <Route exact path="/Blog" component={Blog}></Route>
        <Route exact path="/Community" component={Community}></Route>
        <Route exact path="/Community" component={Version}></Route>
        <Route exact path="/Community" component={Languages}></Route>
      </Switch>
    </Router>
  );
}
