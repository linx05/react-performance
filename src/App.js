import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Nav } from "./components/Nav";
import { Counter } from "./samples/Rendering";
import { BadStructure, MoveStateDown, LiftContent } from "./samples/Structure";
import { DevTools } from "./samples/Profiling/DevTools";
import { ComponentProfile } from "./samples/Profiling/Profiler";
import {
  MemoWithIsEqual,
  MemoBase,
  ObjectPropMemo,
  Memo,
} from "./samples/ReactAPI/Memo";
import {
  UseMemo,
  UseMemoBase,
  UseMemoObjects,
} from "./samples/ReactAPI/useMemo";

let Home = () => <h1>React Performance Optimizations</h1>;
const SubPath = ({ children }) => <div>{children}</div>;

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Content">
        <Router>
          <Home path="/" />
          <Counter path="rendering" />
          <SubPath path="profiling">
            <DevTools path="dev-tools" />
            <ComponentProfile path="profiler" />
          </SubPath>
          <SubPath path="structure">
            <BadStructure path="slow" />
            <MoveStateDown path="state-down" />
            <LiftContent path="lift-content" />
          </SubPath>
          <SubPath path="memo">
            <MemoBase path="base" />
            <Memo path="memo" />
            <MemoWithIsEqual path="is-equal" />
            <ObjectPropMemo path="object-prop" />
          </SubPath>
          <SubPath path="use-memo">
            <UseMemoBase path="base" />
            <UseMemo path="memo" />
            <UseMemoObjects path="object-prop" />
          </SubPath>
        </Router>
      </div>
    </div>
  );
}

export default App;
