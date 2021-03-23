import { useState } from "react";
import { ComplexComponent } from "../../common/ComplexComponent";
import { Header } from "../../../components/Header";

export const App = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <Header>React memo</Header>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello Hims and Hers!</p>
      <ComplexComponent />
    </div>
  );
};

export default App;
