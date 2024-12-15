"use client";
import Link from "next/link";
import { useMovies } from "../../../mock/hooks/useMovies";
import { useSchedules } from "../../../mock/hooks/useSchedule";
import { ScheduleMock } from "../../../mock/types";
import { MoviesMock } from "../../../mock/types/movies";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@yamada-ui/react";
import React, { useState, useEffect } from "react";
import { Calendar } from "@yamada-ui/calendar";

type ScheduleList = ScheduleMock & { movieName: string };

const Page = () => {
  const { movies } = useMovies();
  const { schedules } = useSchedules();
  const route = useRouter();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredSchedules, setFilteredSchedules] = useState<ScheduleList[]>([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNavigation = (id: string) => {
    route.push(`/schedules/${id}/order`);
  };

  useEffect(() => {
    if (schedules && movies) {
      const filtered = schedules
        .filter((schedule: ScheduleMock) => {
          if (!schedule.startTime) return false;
          const scheduleDate = new Date(schedule.startTime).toISOString().split('T')[0];
          const selectedDateString = selectedDate.toISOString().split('T')[0];
          return scheduleDate === selectedDateString;
        })
        .map((schedule: ScheduleMock) => {
          const movie: MoviesMock | undefined = movies.find(
            (movie: MoviesMock) => movie.id === schedule.movieId
          );
          return {
            ...schedule,
            movieName: movie?.movieName || "Unknown",
          };
        });
      setFilteredSchedules(filtered);
    }
  }, [selectedDate, schedules, movies]);

  return (
    <div style={{ padding: "20px" }}>
      <Calendar value={selectedDate} onChange={handleDateChange} />
      <h2>上映一覧 ({selectedDate.toLocaleDateString()})</h2>
      {filteredSchedules.map((schedule: ScheduleList, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p
            style={{
              fontSize: "1.2rem",
            }}
          >
            {schedule.movieName}
            {schedule.theater}
          </p>
          よやく
          <Button
            onClick={() => {
              handleNavigation(schedule.id as string);
            }}
          >
            予約する
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Page;
