import { useState, Profiler } from "react";
import { ComplexComponent } from "../common/ComplexComponent";
import { Header } from "../../components/Header";

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  console.log("Component Timing", id, actualDuration);
}

export const ComponentProfile = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <Header>React Profiler</Header>
      <Profiler id="BaseProfiler" onRender={onRenderCallback}>
        <Profiler id="InputProfiler" onRender={onRenderCallback}>
          <input value={color} onChange={(e) => setColor(e.target.value)} />
          <p style={{ color }}>Hello Hims and Hers!</p>
        </Profiler>
        <Profiler id="ComplexComponentProfiler" onRender={onRenderCallback}>
          <ComplexComponent />
        </Profiler>
      </Profiler>
    </div>
  );
};
