import { useState } from "react";
import { ComplexComponent } from "../common/ComplexComponent";
import { Header } from "../../components/Header";

const Form = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <Header>Component structures: Move state down</Header>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello Hims and Hers!</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Form />
      <ComplexComponent />
    </div>
  );
};

export default App;
