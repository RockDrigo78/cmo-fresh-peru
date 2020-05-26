import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Home from "../Home/Home";
import ContactUs from "../ContactUs/ContactUs";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/contact-us" render={() => <ContactUs />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
