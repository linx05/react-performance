import React from "react";
import {
  Appear,
  CodeSpan,
  CodePane,
  Deck,
  Slide,
  Heading,
  FlexBox,
  Box,
  FullScreen,
  Grid,
  Image,
  Quote,
  Progress,
  Text,
  UnorderedList,
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
    <Box padding="2rem">
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
        <FlexBox
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          height="100%"
        >
          <Heading>React Performance Optimizations</Heading>
        </FlexBox>
      </Slide>
      <Slide backgroundColor={theme.colors.backgroundColor}>
        <Heading>Principle of Performance</Heading>
        <Quote>
          Not doing something is infinitely faster than doing something fast.
        </Quote>
      </Slide>
      <Slide backgroundColor={theme.colors.secondaryBackground}>
        <FlexBox
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          height="100%"
        >
          <Heading>Debugging React Performance</Heading>
        </FlexBox>
      </Slide>
      <Slide backgroundColor={theme.colors.secondaryBackground}>
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          alignContent="center"
          flexDirection="column"
          height="100%"
        >
          <UnorderedList>
            <Text>
              CDD{" "}
              <Appear stepIndex={1}>
                (<CodeSpan>console.log</CodeSpan> Driven Development)
              </Appear>
            </Text>
            <Appear stepIndex={1}>
              <CodePane language="jsx" height="100%">
                {`
                  export const Counter = () => {
                  const [count, setCount] = useState(0);
                  const increment = () => setCount((c) => c + 1);
                  console.log("Rendering!");
                  console.log("Count", count);

                  return (
                    <div>
                      <button onClick={increment}>The count is {count}</button>
                    </div>
                  );
                };
                `}
              </CodePane>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </Slide>
      <Slide backgroundColor={theme.colors.backgroundColor}>
        <Heading>Profiling React</Heading>
        <FlexBox>
          <Text>These</Text>
          <Text>Text</Text>
          <Text color="secondary">Items</Text>
          <Text fontWeight="bold">Flex</Text>
        </FlexBox>
        <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Text color="secondary">Single-size Grid Item</Text>
          </Box>
          <Box backgroundColor="secondary">
            <Text>Double-size Grid Item</Text>
          </Box>
        </Grid>
        <Grid
          gridTemplateColumns="1fr 1fr 1fr"
          gridTemplateRows="1fr 1fr 1fr"
          alignItems="center"
          justifyContent="center"
          gridRowGap={1}
        >
          {Array(9)
            .fill("")
            .map((_, index) => (
              <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
                Hello
              </FlexBox>
            ))}
        </Grid>
      </Slide>
    </Deck>
  );
}

export default App;
