import { Card, CardBody, CardHeader, Image, Text } from "@yamada-ui/react";
import React from "react";

type Props = {
  key?: string;
  movieName?: string;
  movieImage?: string[];
};

export const MovieCard = (props: Props) => {
  return (
    <Card w={"100%"} variant="outline">
      <CardHeader
        sx={{
          // height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
