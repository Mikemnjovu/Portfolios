import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
