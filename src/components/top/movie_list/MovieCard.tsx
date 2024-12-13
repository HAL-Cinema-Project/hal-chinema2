import { Card, CardBody, CardHeader, Image, Text } from "@yamada-ui/react";
import React from "react";

type Props = {
  key?: number;
  movieName?: string;
  movieImage?: string[];
};

export const MovieCard = (props: Props) => {
  return (
    <>
      <Card w={"25%"} variant="outline">
        <CardHeader display={"flex"} alignItems={"center"}>
          <Image
            sx={{ width: "100%" }}
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
    </>
  );
};
