import { useMovies } from "../../../../mock/hooks/useMovies";
import { useSchedules } from "../../../../mock/hooks/useSchedule";
import { ScheduleMock } from "../../../../mock/types";
import { MoviesMock } from "../../../../mock/types/movies";

export const Page = () => {
  const { movies } = useMovies();
  const { schedules } = useSchedules();
  const scheduleList = schedules.map((schedule: ScheduleMock) => {
    const movie = movies.find(
      (movie: MoviesMock) => Number(movie.id) === Number(schedule.movieId)
    );
    console.log("Found Movie:", movie);
    return {
      ...schedule,
      movieName: movie ? movie.movieName : "",
    };
  });

  console.log(scheduleList);

  return (
    <div style={{ padding: "20px" }}>
      {scheduleList.map((schedule: ScheduleMock, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              margin: "10px 0",
              color: "#fff",
            }}
          >
            {schedule.theater} {schedule.movieName}
          </p>
        </div>
      ))}
    </div>
  );
};
