import React from "react";

import { Box, Button, Image } from "@yamada-ui/react";
import { TopCaption } from "../TopCaption";
import { TopContents } from "../TopContents";

export const TheaterList = () => {
  return (
    <TopContents>
      <TopCaption caption_text="THEATERS" />
      <Box as={"center"}>
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
        <Button variant={"outline"} color={"#fff"} px={"50px"}>
          詳しく見る
        </Button>
      </Box>
    </TopContents>
  );
};
