import { Card, CardBody, CardHeader, Image, Text } from "@yamada-ui/react";
import React from "react";

type Props = {
  movieName?: string;
  movieImage?: string[];
};

export const MovieCard = (props: Props) => {
  return (
    <Card w="100%" p={0} variant="outline" borderRadius="5px">
      <CardHeader
        p={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "5px 5px 0 0",
        }}
      >
        <Image
          src={props.movieImage?.[0]}
          alt={props.movieName}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "5px 5px 0 0",
          }}
        />
      </CardHeader>
      <CardBody p={3}>
        <Text w={"100%"} isTruncated>
          {props.movieName}
        </Text>
      </CardBody>
    </Card>
  );
};
