import { useState } from "react";
import { ComplexComponent } from "../common/ComplexComponent";

export const App = () => {
  let [color, setColor] = useState("red");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p>Hello, world!</p>
      <ComplexComponent />
    </div>
  );
};
