import React from "react";

import { Box, Text, Image } from "@yamada-ui/react";
import { TopCaption } from "../TopCaption";

export const TheaterList = () => {
  return (
    <Box h={"100vh"}>
      <Box pl={"40px"}>
        <TopCaption caption_text="THEATERS" />
      </Box>
      <Box as={"center"}>
        <Box display="flex" w="100%" py={"20px"}>
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
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flex={1}
            w={"100%"}
            background={"#121c4a"}
          >
            <Text fontSize={"2rem"}>劇場一覧 &gt;</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
