import { Text } from "@yamada-ui/react";
import React from "react";

type Props = {
  caption_text: string;
};

export const TopCaption = ({ caption_text }: Props) => {
  return (
    <>
      <Text left={"40px"} fontSize={"4xl"} fontWeight={"bold"}>
        {caption_text}
      </Text>
    </>
  );
};
