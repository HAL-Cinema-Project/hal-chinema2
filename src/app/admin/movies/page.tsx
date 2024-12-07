"use client";

import { MovieTable } from "@/components/admin/data-table/MovieTable";
import { AddMovieModal } from "@/components/admin/form/modal/AddMovieModal";

const Page = () => {
  return (
    <div>
      <AddMovieModal />
      <MovieTable />
    </div>
  );
};

export default Page;
