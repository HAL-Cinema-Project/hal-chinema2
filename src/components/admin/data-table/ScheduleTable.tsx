"use client";
import { Button, Input } from "@yamada-ui/react";
import { Table } from "@yamada-ui/table";
import { deleteSchedule } from "../form/acrions/schedule";
import { useSchedules } from "../../../../mock/hooks/useSchedule";
import { useState } from "react";

export const ScheduleTable = () => {
  const { schedules } = useSchedules();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  // 検索クエリ変更時はページをリセット
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // 検索条件に合致するデータを抽出
  const filteredSchedules = schedules.filter((schedule) =>
    schedule.movieId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    schedule.theater.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 総ページ数の計算と該当ページのデータを抽出
  const totalPages = Math.ceil(filteredSchedules.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredSchedules.slice(startIndex, startIndex + itemsPerPage);

  // ページ番号リストを生成する関数
  const getPageNumbers = () => {
    let pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
    if (currentPage <= 4) {
      // 先頭側の場合：1～6と最後のページ
      pages = [1, 2, 3, 4, 5, 6, totalPages];
    } else if (currentPage >= totalPages - 3) {
      // 末尾側の場合：最初のページと末尾6ページ
      pages = [1];
      for (let i = totalPages - 5; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 中間の場合：最初のページ、前後2件、最後のページ
      pages = [1, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, totalPages];
    }
    return pages;
  };

  // ページ番号表示（ギャップがあれば「…」を挿入）
  const renderPagination = () => {
    const pages = getPageNumbers();
    const paginationElements = [];
    for (let i = 0; i < pages.length; i++) {
      if (i > 0 && pages[i] - pages[i - 1] > 1) {
        paginationElements.push(
          <span key={`ellipsis-${i}`} style={{ margin: "0 5px" }}>
            …
          </span>
        );
      }
      paginationElements.push(
        <Button
          key={pages[i]}
          variant={pages[i] === currentPage ? "solid" : "outline"}
          onClick={() => setCurrentPage(pages[i])}
          style={{ margin: "0 5px" }}
        >
          {pages[i]}
        </Button>
      );
    }
    return paginationElements;
  };

  // 前後のページ移動
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // テーブルのカラム定義（元のコードと同様）
  const columns = [
    { header: "ID", accessorKey: "id" },
    { header: "映画名", accessorKey: "movieName" },
    { header: "シアター", accessorKey: "theater" },
    { header: "開始時間", accessorKey: "startTime" },
    { header: "終了時間", accessorKey: "endTime" },
    { header: "予約可能", accessorKey: "isAvailable" },
    {
      header: "Edit",
      accessorKey: "edit",
      cell: (info) => (
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
      cell: (info) => (
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
      <Table data={currentData} columns={columns} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          style={{ margin: "0 5px" }}
        >
          前へ
        </Button>
        {renderPagination()}
        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{ margin: "0 5px" }}
        >
          次へ
        </Button>
      </div>
    </>
  );
};
