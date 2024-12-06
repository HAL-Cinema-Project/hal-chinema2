import { CreateMovie, UpdateMovie } from "../../../../mock/types/movies";
import { apiDelete, apiGet, apiPost, apiPut } from "../../../../util/apiClient";

export const url = "http://localhost:8011/movies";

export const createMovie = async (data: CreateMovie) => {
  try {
    const res = await apiPost(url, data);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const getMovies = async () => {
  try {
    const res = await apiGet(url);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const getMovie = async (movieId: number) => {
  try {
    const res = await apiGet(url + `/${movieId}`);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const updateMovie = async (movieId: string, data: UpdateMovie) => {
  try {
    const res = await apiPut(url + `/${movieId}`, data);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const deleteMovie = async (movieId: string) => {
  try {
    const res = await apiDelete(url + `/${movieId}`);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};
