"use client";
import { Button } from "@yamada-ui/react";
import { useSchedules } from "../../../mock/hooks/useSchedule";
import { Table } from "@yamada-ui/table";
import { deleteSchedule } from "../form/acrions/schedule";

export const ScheduleTable = () => {
  const { schedules } = useSchedules();

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
      <Table data={schedules} columns={column} />
    </>
  );
};
