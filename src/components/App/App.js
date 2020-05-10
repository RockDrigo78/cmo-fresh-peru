import React from "react";
import "./App.css";
import NavbarMain from "../Navbar/NavbarMain";
import Routes from "../Routes/Routes";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
