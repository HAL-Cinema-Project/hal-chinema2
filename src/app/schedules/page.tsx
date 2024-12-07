"use client";
import Link from "next/link";
import { useMovies } from "../../../mock/hooks/useMovies";
import { useSchedules } from "../../../mock/hooks/useSchedule";
import { ScheduleMock } from "../../../mock/types";
import { MoviesMock } from "../../../mock/types/movies";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@yamada-ui/react";

type ScheduleList = ScheduleMock & { movieName: string };
const Page = () => {
  const { movies } = useMovies();
  const { schedules } = useSchedules();
  const route = useRouter();
  const { id } = useParams();
  const handleNavigation = (id: string) => {
    route.push(`/schedules/${id}/order`);
  };

  const scheduleList: ScheduleList[] | undefined =
    schedules &&
    schedules.map((schedule: ScheduleMock) => {
      const movie: MoviesMock | undefined = movies.find(
        (movie: MoviesMock) => movie.id === schedule.movieId
      );
      return {
        ...schedule,
        movieName: movie?.movieName || "Unknown",
      };
    });

  return (
    <div style={{ padding: "20px" }}>
      {scheduleList.map((schedule: ScheduleList, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p
            style={{
              fontSize: "1.2rem",
            }}
          >
            {schedule.startTime} - {schedule.endTime}
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
