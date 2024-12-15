export interface MoviesMock {
  id?: string;
  movieName?: string;
  director?: string;
  thumbnail?: string;
  summary?: string;
  link?: string;
  term?: number;
  releaseDate?: string;
  endDate?: string;
  movieImage?: string[];
}

export type CreateMovie = Partial<MoviesMock>;

export type UpdateMovie = Partial<Omit<MoviesMock, "id">>;
