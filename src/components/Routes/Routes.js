import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Prices from "../Prices/Prices";
import LandingPage from "../LandingPage/LandingPage";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/services" render={() => <Services />} />
        <Route exact path="/prices" render={() => <Prices />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
