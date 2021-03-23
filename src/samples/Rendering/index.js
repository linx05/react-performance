import { useState } from "react";
import { Header } from "../../components/Header";

const Logger = (props) => {
  console.log(`Logger with ${props.label} rendered`);
  return <p>Label: {props.label}</p>;
};
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <Header>React Rendering</Header>
      <Logger label="counter" />
      <button onClick={increment}>The count is {count}</button>
    </div>
  );
};
