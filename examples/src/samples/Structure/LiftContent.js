import { useState } from "react";
import { ComplexComponent } from "../common/ComplexComponent";

const ColorPicker = ({ children }) => {
  let [color, setColor] = useState("red");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      {children}
    </div>
  );
};

export const App = () => {
  return (
    <ColorPicker>
      <p>Hello, world!</p>
      <ComplexComponent />
    </ColorPicker>
  );
};
