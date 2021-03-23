import { useState } from "react";
import { ComplexComponent } from "../common/ComplexComponent";
import { Header } from "../../components/Header";

const App = ({ children }) => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <Header>Component structures: Lift content</Header>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello Hims and Hers!</p>
      {children}
    </div>
  );
};

const AppContainer = () => (
  <App>
    <ComplexComponent />
  </App>
);

export default AppContainer;
