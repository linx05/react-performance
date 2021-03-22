import { useState, memo } from "react";
import toHex from "colornames";
import { ComplexComponent } from "../../common/ComplexComponent";

const isEqual = (prevProps, nextProps) => {
  if (prevProps.color !== nextProps.color && !toHex.get(nextProps.color)) {
    return true;
  }
};

const MemoizedComplexComponent = memo(ComplexComponent, isEqual);

export const Memo = () => {
  let [color, setColor] = useState("red");
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <MemoizedComplexComponent color={color} />
    </div>
  );
};

export default Memo;
