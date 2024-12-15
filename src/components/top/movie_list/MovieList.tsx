"use client";

import { Box, Button } from "@yamada-ui/react";
import React from "react";
import { useMovies } from "../../../../mock/hooks/useMovies";
import { MovieCard } from "./MovieCard";
import { TopCaption } from "../TopCaption";

export const MovieList = () => {
  const { movies } = useMovies();

  return (
    <>
      <Box p={"20px"} bgColor={"#15202B"}>
        <TopCaption caption_text="MOVIES" />
        <Box as="center">
          <Box
            display={"flex"}
            w={"1000px"}
            justifyContent={"center"}
            gap={"10px"}
            p={"20px"}
          >
            {movies.map((item) => (
              <MovieCard
                key={item.id}
                movieName={item.movieName}
                movieImage={item.movieImage}
              />
            ))}
          </Box>

          <Button variant={"outline"} color={"#fff"}>
            もっと見る
          </Button>
        </Box>
      </Box>
    </>
  );
};
