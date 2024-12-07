"use client";
import { useMovies } from "../../../mock/hooks/useMovies";
import { useSchedules } from "../../../mock/hooks/useSchedule";
import { ScheduleMock } from "../../../mock/types";
import { MoviesMock } from "../../../mock/types/movies";

type ScheduleList = ScheduleMock & { movieName: string };
const Page = () => {
  const { movies } = useMovies();
  const { schedules } = useSchedules();

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
        </div>
      ))}
    </div>
  );
};

export default Page;
