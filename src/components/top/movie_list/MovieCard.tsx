import { Card, CardBody, CardHeader, Image, Text } from "@yamada-ui/react";
import React from "react";

type Props = {
  key?: number;
  movieName?: string;
  movieImage?: string[];
};

export const MovieCard = (props: Props) => {
  return (
    <Card w={"25%"} variant="outline">
      <CardHeader
        sx={{
          height: "300px", // CardHeaderの高さを固定
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // 画像がはみ出さないように
        }}
      >
        <Image
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // 高さ内に画像を収める
          }}
          src={props.movieImage?.[0]}
          alt={props.movieName}
        />
      </CardHeader>
      <CardBody>
        <Text w={"100%"} isTruncated>
          {props.movieName}
        </Text>
      </CardBody>
    </Card>
  );
};
