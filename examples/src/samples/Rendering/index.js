import { useState } from "react";

const Logger = (props) => {
  console.log(`Logger with ${props.label} rendered`);
  return <p>Label: {props.label}</p>;
};
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <Logger label="counter" />
      <button onClick={increment}>The count is {count}</button>
    </div>
  );
};
