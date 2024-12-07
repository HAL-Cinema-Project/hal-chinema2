"use client";
import { useMovies } from "../../../mock/hooks/useMovies";
import { MoviesMock } from "../../../mock/types/movies";
import Link from "next/link";

const Page = () => {
  const { movies } = useMovies();
  return (
    <div style={{ padding: "20px" }}>
      {movies &&
        movies.map((item: MoviesMock) => (
          <div
            key={item.id}
            style={{
              marginBottom: "20px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "20px" }}>
                <img
                  src={item.thumbnail}
                  alt='Movie Poster'
                  style={{ width: "100px", height: "150px" }}
                />
              </div>
              <div>
                <div style={{ marginBottom: "10px" }}>
                  <b>{item.movieName}</b>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <span>監督名：</span>
                  <span>{item.director}</span>
                </div>
                <Link href={`${item.link}`}>
                  <button
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#555",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    詳細へ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
