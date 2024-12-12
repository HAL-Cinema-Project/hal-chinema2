"use client";

import { Box } from "@yamada-ui/react";
import React from "react";
import { useMovies } from "../../../../mock/hooks/useMovies";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const { movies } = useMovies();

  return (
    <>
      <Box display={"flex"}>
        {movies.map((item) => (
          <MovieCard key={item.id} movieName={item.movieName} />
        ))}
      </Box>
    </>
  );
};
