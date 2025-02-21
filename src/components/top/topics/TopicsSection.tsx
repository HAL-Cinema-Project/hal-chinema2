import React from "react";
import { Box, Container, Grid } from "@yamada-ui/react";
import { TopCaption } from "../TopCaption";
import { TopContents } from "../TopContents";

export const TopicsSection = () => {
  return (
    <TopContents>
      <TopCaption caption_text="TOPICS" />
      <Box as={"center"}>
        <Box py={"10px"}>
          <Container mx="auto" py={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {[...Array(6)].map((_, index) => (
                <Box
                  key={index}
                  w="100%"
                  h="100px"
                  bgColor="blue.300"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                  fontSize="lg"
                  color="white"
                  rounded="md"
                >
                  TOPIC {index + 1}
                </Box>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </TopContents>
  );
};
