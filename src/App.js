import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Bookings from "./Bookings";
import About from "./About";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div>
      <h1>React router practice</h1>
      <p>Home</p>
      <p>About</p>
      <p>Bookings</p>

      <Home />
      <About />
      <Bookings />
    </div>
  );
}

export default App;
