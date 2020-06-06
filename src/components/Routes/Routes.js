import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Home from "../Home/Home";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/home" render={() => <Home />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
