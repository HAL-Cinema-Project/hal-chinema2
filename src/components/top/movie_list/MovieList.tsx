"use client";

import { Box } from "@yamada-ui/react";
import React from "react";
import { useMovies } from "../../../../mock/hooks/useMovies";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const { movies } = useMovies();

  return (
    <>
      <Box as="center">
        <Box
          display={"flex"}
          w={"1000px"}
          justifyContent={"center"}
          gap={"10px"}
        >
          {movies.map((item) => (
            <MovieCard
              key={item.id}
              movieName={item.movieName}
              movieImage={item.movieImage}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
