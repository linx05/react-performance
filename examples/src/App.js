import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import "./App.css";
import { Nav } from "./components/Nav";

let Home = () => <div>Home</div>;
let Dash = () => <div>Dash</div>;

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Content">
        <h1>React Performance Optimizations</h1>
        <Router>
          <Home path="/" />
          <Dash path="dashboard" />
        </Router>
      </div>
    </div>
  );
}

export default App;
