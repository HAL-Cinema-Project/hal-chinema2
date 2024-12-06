import { useEffect, useState } from "react";
import { MoviesMock } from "../types/movies";
import { apiGet } from "../../util/apiClient";
export const useMovieById = (movieId: string) => {
  const [movie, setMovie] = useState<MoviesMock>();

  const fetchData = async (movieId: string) => {
    try {
      const url = "http://localhost:8011/movies";
      const res = await apiGet(url + `/${movieId}`);
      setMovie(res);
    } catch (error) {
      console.error("movie service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  return { movie, setMovie };
};
