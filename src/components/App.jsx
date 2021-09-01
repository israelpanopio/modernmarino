import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavigBar from "./NavBar";
import Invest from "./Invest";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Body";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavigBar />
        <Body />
        <Invest />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
