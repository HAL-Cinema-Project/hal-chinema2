"use client";
import { useParams } from "next/navigation";
import { useMovieById } from "../../../../../mock/hooks/useMovieById";

export default function Page() {
  const urlParams = useParams();
  const { id } = urlParams;

  if (typeof id !== "string") {
    return <div>Invalid ID</div>;
  }
  const { movie } = useMovieById(id);
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Movie Detail</h1>
      <div>
        <h2>Movie ID: {movie.id}</h2>
        <h2>Movie Name: {movie.movieName}</h2>
        <h2>Director: {movie.director}</h2>
        <h2>Link: {movie.link}</h2>
        <h2>開始日 : {movie.releaseDate}</h2>
        <h2>終了日 : {movie.endDate}</h2>
        <h2>Term : {movie.term}</h2>
      </div>
    </div>
  );
}
