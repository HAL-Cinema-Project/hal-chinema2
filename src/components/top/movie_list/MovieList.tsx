"use client";
import { Box, Button } from "@yamada-ui/react";
import React from "react";
import { useMovies } from "../../../../mock/hooks/useMovies";
import { MovieCard } from "./MovieCard";
import { TopCaption } from "../TopCaption";

import Link from "next/link";
import { TopContents } from "../TopContents";

export const MovieList = () => {
  const { movies } = useMovies();

  return (
    <TopContents>
      <TopCaption caption_text="MOVIES" />
      <Box as="center">
        <Box
          display={"flex"}
          w={"100%"}
          justifyContent={"center"}
          gap={"20px"}
          pb={"20px"}
        >
          {movies.slice(0, 4).map((item) => (
            <Link
              href={"/"}
              key={item.id}
              style={{ display: "block", width: "100%" }}
            >
              <MovieCard
                movieName={item.movieName}
                movieImage={item.movieImage}
              />
            </Link>
          ))}
        </Box>

        <Link href={"/movies"}>
          <Button variant={"outline"} color={"#fff"} px={"50px"}>
            もっと見る
          </Button>
        </Link>
      </Box>
    </TopContents>
  );
};
