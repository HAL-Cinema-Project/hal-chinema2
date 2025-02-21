import { Text } from "@yamada-ui/react";
import React from "react";

type Props = {
  caption_text: string;
};

export const TopCaption = ({ caption_text }: Props) => {
  return (
    <>
      <Text fontSize={"8xl"} fontWeight={"bold"}>
        {caption_text}
      </Text>
    </>
  );
};
