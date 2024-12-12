import { Card, CardBody, CardHeader, Image } from "@yamada-ui/react";
import React from "react";

type Props = {
  key?: number;
  movieName?: string;
};

export const MovieCard = (props: Props) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Image src="" alt={props.movieName} />
        </CardHeader>
        <CardBody>{props.movieName}</CardBody>
      </Card>
    </>
  );
};
