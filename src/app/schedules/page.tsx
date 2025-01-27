"use client";
import React, { useState, useEffect } from "react";
import { useMovies } from "../../../mock/hooks/useMovies";
import { useSchedules } from "../../../mock/hooks/useSchedule";
import { ScheduleMock } from "../../../mock/types";
import { MoviesMock } from "../../../mock/types/movies";
import { useRouter, } from "next/navigation";
import { Grid, GridItem, Box, Text, VStack } from "@yamada-ui/react";
import { Calendar } from "@yamada-ui/calendar";

type ScheduleList = ScheduleMock & { movieName: string };

const Page = () => {
  const { movies } = useMovies();
  const { schedules } = useSchedules();
  const route = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredSchedules, setFilteredSchedules] = useState<ScheduleList[]>([]);

  const handleDateChange = (date: Date) => {
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
          const scheduleDate = new Date(schedule.startTime).toISOString().split("T")[0];
          const selectedDateString = selectedDate.toISOString().split("T")[0];
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

  const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString);
    const formatter = new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    return formatter.format(date) + "~"; // "~" を追加
  };

  return (
    <>
      <Box style={{ padding: "20px" }}>
        <Calendar value={selectedDate} onChange={handleDateChange} />
      </Box>
      <Box style={{ padding: "20px" }}>
        <h2 style={{ padding: "8px 0px 20px 0px" }}>上映一覧 ({selectedDate.toLocaleDateString()})</h2>
        {filteredSchedules.length === 0 ? (
          <p>該当するスケジュールがありません。</p>
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(1, 1fr)",
            }}
            gap={6}
          >
            {filteredSchedules.map((schedule: ScheduleList) => (
              <GridItem key={schedule.id} onClick={() => handleNavigation(schedule.id as string)}>
                <Box
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  shadow="md"
                  _hover={{ bg: "blue.500", cursor: "pointer", transition: "background-color 0.3s" }}
                >
                  <VStack align="start" spacing={2}>
                    <Text fontSize="lg" fontWeight="bold">
                      {schedule.movieName}
                    </Text>
                    <Text>{schedule.theater}</Text>
                    <Text>{formatDateTime(schedule.startTime)}</Text>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Page;
