import { useState, memo } from "react";
import toHex from "colornames";
import { ComplexComponent } from "../../common/ComplexComponent";
import { Header } from "../../../components/Header";

const isEqual = (prevProps, nextProps) => {
  if (prevProps.color !== nextProps.color && !toHex.get(nextProps.color)) {
    return true;
  }
};

const MemoizedComplexComponent = memo(ComplexComponent, isEqual);

export const App = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <Header>React memo with isEqual parameter</Header>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello Hims and Hers!</p>
      <MemoizedComplexComponent color={color} />
    </div>
  );
};

export default App;
