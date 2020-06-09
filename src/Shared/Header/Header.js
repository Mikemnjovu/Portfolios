import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../../Singup/Signup";
import Nav from "./Nav";
const Header = () => {
  return (
    <div>
      <Router>
        <Nav />
      </Router>
    </div>
  );
};

export default Header;
