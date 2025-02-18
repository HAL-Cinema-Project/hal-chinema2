import React from "react";
import { Box, Button, Text } from "@yamada-ui/react";
import { TopCaption } from "../TopCaption";

export const FoodSection = () => {
  return (
    <>
      <TopCaption caption_text="FOODS" />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"40px"}
        w="1000px"
        py={"20px"}
      >
        <Box w={"350px"} h={"400px"} bgColor={"#222"} rounded={"10px"}></Box>

        <Box>
          <Text w={"350px"} py={"40px"}>
            HALシネマではポップコーンやソフトドリンクなどの定番メニューだけでなく、
            期間限定の特別メニューも味わうことができます。
            映画のお供に、1人でも複数人でも楽しむことができます。
          </Text>
          <Box as={"center"}>
            <Button variant={"outline"} color={"#fff"} px={"50px"}>
              詳しく見る
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
