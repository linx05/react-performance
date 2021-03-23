import { useState } from "react";
import { ComplexComponent } from "../../common/ComplexComponent";

export const App = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello Hims and Hers!</p>
      <ComplexComponent />
    </div>
  );
};

export default App;
