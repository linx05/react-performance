import { useState } from "react";
import { ComplexComponent } from "../common/ComplexComponent";
import { Header } from "../../components/Header";

export const DevTools = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <Header>Dev Tools</Header>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello Hims and Hers!</p>
      <ComplexComponent />
    </div>
  );
};
