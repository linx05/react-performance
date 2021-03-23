import { useState, memo } from "react";
import { ComplexComponent } from "../../common/ComplexComponent";
import styled from "styled-components";
import { Header } from "../../../components/Header";

const MemoizedComplexComponent = memo(ComplexComponent);

const Input = styled.input`
  margin-left: 10px;
`;

export const App = () => {
  let [color, setColor] = useState("red");
  let [dimensions, setDimensions] = useState(50);
  const config = { dimensions };
  return (
    <div>
      <div>
        <Header>Memo with complex props</Header>
        <label htmlFor="color">Color</label>
        <Input
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dimensions">Table Dimensions</label>
        <Input
          id="dimensions"
          type="number"
          value={dimensions}
          onChange={(e) => setDimensions(e.target.value)}
        />
      </div>
      <MemoizedComplexComponent config={config} />
    </div>
  );
};

export default App;
