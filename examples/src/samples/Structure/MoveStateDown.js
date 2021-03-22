import { useState } from "react";
import { ComplexComponent } from "../common/ComplexComponent";

const Form = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <Form />
      <ComplexComponent />
    </div>
  );
};