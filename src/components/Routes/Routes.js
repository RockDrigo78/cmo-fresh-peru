import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Prices from "../Prices/Prices";
import News from "../News/News";
import LandingPage from "../LandingPage/LandingPage";

class Routes extends Component {
  render() {
    const getNews = props => {
      let newsTitle = props.match.params.newsTitle;
      let currentNews = this.props.items.articles.find(
        item => item.title.toLowerCase() === newsTitle.toLowerCase()
      );
      return <News {...props} item={currentNews} />
    };
    
    return (
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route
          exact
          path="/home"
          render={() => (
            <Home items={this.props.items} isLoaded={this.props.isLoaded} />
          )}
        />
        <Route exact path="/services" render={() => <Services />} />
        <Route exact path="/prices" render={() => <Prices />} />
        <Route exact path="/home/:newsTitle" render={getNews} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
