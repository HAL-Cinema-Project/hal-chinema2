import { MovieList } from "@/components/top/movie_list/MovieList";
import { TheaterList } from "@/components/top/theater_list/TheaterList";
import { Box } from "@yamada-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Box>
        <MovieList />
        <TheaterList />
      </Box>
    </>
  );
};

export default page;
