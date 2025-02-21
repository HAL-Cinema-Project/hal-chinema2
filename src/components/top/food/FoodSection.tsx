import React from "react";
import { Box, Button, Text } from "@yamada-ui/react";
import { TopCaption } from "../TopCaption";
import { TopContents } from "../TopContents";

export const FoodSection = () => {
  return (
    <TopContents>
      <Box
        display={"flex"}
        justifyContent={"left"}
        alignItems={"end"}
        w="100%"
        height={"80%"}
        py={"20px"}
        backgroundImage="url(image/bluelock_scene.jpg)"
        borderRadius={"40px"}
      >
        <Box p={"75px"} color={"#000"}>
          <Box py={"20px"}>
            <TopCaption caption_text="FOODS" />
            <Text w={"350px"}>
              HALシネマではポップコーンやソフトドリンクなどの定番メニューだけでなく、
              期間限定の特別メニューも味わうことができます。
              映画のお供に、1人でも複数人でも楽しむことができます。
            </Text>
          </Box>
          <Box as={"center"}>
            <Button variant={"outline"} color={"#fff"} px={"50px"}>
              詳しく見る
            </Button>
          </Box>
        </Box>
      </Box>
    </TopContents>
  );
};
