import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Home from "../Home/Home";
import CustomProductStatistics from "../CustomProductStatistics/CustomProductStatistics";
import QcPreDeparture from "../QcPreDeparture/QcPreDeparture";
import CommercialInteligence from "../CommercialInteligence/CommercialInteligence";
import ContactUs from "../ContactUs/ContactUs";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route
          exact
          path="/custom-product-statistics"
          render={() => <CustomProductStatistics />}
        />
        <Route
          exact
          path="/qc-pre-departure"
          render={() => <QcPreDeparture />}
        />
        <Route
          exact
          path="/commercial-inteligence"
          render={() => <CommercialInteligence />}
        />
        <Route exact path="/contact-us" render={() => <ContactUs />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
