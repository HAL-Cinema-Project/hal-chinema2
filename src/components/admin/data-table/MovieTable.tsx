"use client";
import { useState } from "react";
import { Table } from "@yamada-ui/table";
import { Button, Center, Input } from "@yamada-ui/react";
import { deleteMovie } from "../form/acrions/movie";
import { useMovies } from "../../../../mock/hooks/useMovies";
import { useRouter } from "next/navigation";

export const MovieTable = () => {
  const router = useRouter();
  const { movies } = useMovies();
  const [searchQuery, setSearchQuery] = useState("");

  const handleRouter = (id: string) => {
    router.push(`/admin/movies/${id}`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.movieName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.director.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    { header: "Movie ID", accessorKey: "id" },
    { header: "Movie Name", accessorKey: "movieName" },
    { header: "Director", accessorKey: "director" },
    { header: "Link", accessorKey: "link" },
    { header: "Term", accessorKey: "term" },
    {
      header: "Edit",
      accessorKey: "edit",

      cell: (info: any) => (
        <Button
          style={{
            width: "60%",
            height: "30px",
            borderRadius: "3px",
            backgroundColor: "#a9ffcd",
          }}
          onClick={() => {
            handleRouter(info.row.original.id)
          }}
        >
          詳細/編集
        </Button>
      ),
    },
    {
      header: "Delete",
      accessorKey: "delete",
      cell: (info: any) => (
        <Button
          style={{
            width: "50%",
            height: "30px",
            borderRadius: "3px",
            backgroundColor: "#ffa9a9",
          }}
          onClick={() => {
            deleteMovie(info.row.original.id);
            window.location.reload();
          }}
        >
          削除
        </Button>
      ),
    },
  ];

  return (
    <>
        <div style={{ width: "300px", marginTop: "-40px" , marginLeft: "200px", marginBottom: "20px" }}>
          <Input
            placeholder="Search by movie name or director"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      <Center
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          padding: "0 50px",
          boxSizing: "border-box",
        }}
      >
        <Table columns={columns} data={filteredMovies} />
      </Center>
    </>
  );
};
