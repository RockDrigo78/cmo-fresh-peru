import React, { Component } from "react";
import "./App.css";
import NavbarMain from "../Navbar/NavbarMain";
import Routes from "../Routes/Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    var url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=7fb5557b0e1147debd530d7de88d1a33";
    var req = new Request(url);

    fetch(req)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }  

  render() {

    if (!this.state.isLoaded) {
      return <div>is Loading...</div>;
    }
    
    return (
      <div className="App">
        <NavbarMain />
        <Routes items={this.state.items} isLoaded={this.state.isLoaded}/>
      </div>
    );
  }
}

export default App;
