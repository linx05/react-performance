import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Nav } from "./components/Nav";
import { Counter } from "./samples/Rendering";
import {
  BadStructure,
  BadColorDiv,
  MoveStateDown,
  LiftContent,
} from "./samples/Structure";
import { RenderMarkdown } from "./samples/ReactAPI/useMemo/useMemo";
import Memo from "./samples/ReactAPI/Memo/Memo.final";

let Home = () => <div>Home</div>;
const SubPath = ({ children }) => <div>{children}</div>;

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Content">
        <h1>React Performance Optimizations</h1>
        <Router>
          <Home path="/" />
          <Counter path="rendering" />
          <SubPath path="structure">
            <BadStructure path="slow" />
            <MoveStateDown path="state-down" />
            <BadColorDiv path="slow-higher-state" />
            <LiftContent path="lift-content" />
          </SubPath>
          <SubPath path="react-api">
            <Memo path="memo" />
            <RenderMarkdown path="use-memo" />
          </SubPath>
        </Router>
      </div>
    </div>
  );
}

export default App;
