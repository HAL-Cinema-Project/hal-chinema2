import React from "react";
import { TopContents } from "../TopContents";
import { Box, Image } from "@yamada-ui/react";
import { TopCaption } from "../TopCaption";

export const TheaterList = () => {
  return (
    <>
      <TopContents>
        <TopCaption caption_text="THEATERS" />
        <Box display="flex" w="1000px" py={"20px"}>
          <Box flex={1}>
            <Image
              w="100%"
              src="image/hal_osaka.jpg"
              alt="HAL大阪"
              objectFit="cover"
            />
          </Box>
          <Box flex={1}>
            <Image
              w="100%"
              src="image/hal_nagoya.jpg"
              alt="HAL名古屋"
              objectFit="cover"
            />
          </Box>
          <Box flex={1}>
            <Image
              w="100%"
              src="image/hal_tokyo.jpg"
              alt="HAL東京"
              objectFit="cover"
            />
          </Box>
        </Box>
      </TopContents>
    </>
  );
};
