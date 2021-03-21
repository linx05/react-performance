import React from "react";
import {
  Deck,
  Slide,
  Heading,
  FlexBox,
  Box,
  FullScreen,
  Progress,
} from "spectacle";

const theme = {
  colors: {
    primary: "#000",
    secondary: "#000",
    backgroundColor: "#eee2d7",
    secondaryBackground: "#d5dade",
  },
  fontSizes: {
    header: "64px",
    paragraph: "28px",
  },
};

const template = ({ slideNumber, numberOfSlides }) => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
      Slide {slideNumber} of {numberOfSlides}
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={theme} template={template}>
      <Slide backgroundColor={theme.colors.backgroundColor}>
        <Heading>React Performance Optimizations</Heading>
      </Slide>
      <Slide backgroundColor={theme.colors.backgroundColor}>
        <Heading>Other Page</Heading>
      </Slide>
    </Deck>
  );
}

export default App;
