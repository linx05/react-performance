import { useState, useMemo } from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { renderItems } from "../../common/ComplexComponent";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  overflow: hidden;
`;

const PickerContainer = styled.div`
  padding-bottom: 2rem;
`;

export const App = () => {
  let [color, setColor] = useState("#aabbcc");
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const items = renderItems(chosenEmoji?.emoji || "🔥");

  return (
    <Container>
      <PickerContainer>
        <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} native />
      </PickerContainer>
      <PickerContainer>
        <HexColorPicker color={color} onChange={setColor} />
      </PickerContainer>
      <div>{items}</div>
    </Container>
  );
};

export default App;
