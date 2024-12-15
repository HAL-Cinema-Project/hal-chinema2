"use client";
import { Button, Input } from "@yamada-ui/react";
import { Table } from "@yamada-ui/table";
import { deleteSchedule } from "../form/acrions/schedule";
import { useSchedules } from "../../../../mock/hooks/useSchedule";
import { useState } from "react";

export const ScheduleTable = () => {
  const { schedules } = useSchedules();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = schedules.filter(
    (schedule) =>
      schedule.movieId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      schedule.theater.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const column = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "映画名",
      accessorKey: "movieName",
    },
    {
      header: "シアター",
      accessorKey: "theater",
    },
    {
      header: "開始時間",
      accessorKey: "startTime",
    },
    {
      header: "終了時間",
      accessorKey: "endTime",
    },
    {
      header: "予約可能",
      accessorKey: "isAvailable",
    },
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
            console.log(info.row.original.id);
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
            deleteSchedule(info.row.original.id);
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
      <div
        style={{
          width: "300px",
          marginTop: "-40px",
          marginLeft: "200px",
          marginBottom: "20px",
        }}
      >
        <Input
          placeholder="Search by Schedule movie or theater"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Table data={filteredMovies} columns={column} />
    </>
  );
};
