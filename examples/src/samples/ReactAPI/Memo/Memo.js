import { useState } from "react";
import { ComplexComponent } from "../../common/ComplexComponent";

export const Memo = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ComplexComponent />
    </div>
  );
};

export default Memo;
