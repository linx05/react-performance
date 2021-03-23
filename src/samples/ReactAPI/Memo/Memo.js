import { useState, memo } from "react";
import { ComplexComponent } from "../../common/ComplexComponent";

const MemoizedComplexComponent = memo(ComplexComponent);

export const App = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello Hims and Hers!</p>
      <MemoizedComplexComponent />
    </div>
  );
};

export default App;
