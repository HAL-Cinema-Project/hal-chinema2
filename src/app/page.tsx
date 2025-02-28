import { FoodSection } from "@/components/top/food/FoodSection";
import HeroSection from "@/components/top/hero_section/HeroSection";
import { MovieList } from "@/components/top/movie_list/MovieList";
import { TheaterList } from "@/components/top/theater_list/TheaterList";
import { ScheduleSection } from "@/components/top/schedule_section/ScheduleSection";
import { TopicsSection } from "@/components/top/topics/TopicsSection";
import { Box } from "@yamada-ui/react";
import React from "react";

const Page = () => {
  return (
    <Box minH="100vh">
      {/* <HeroSection /> */}
      <MovieList />
      <TheaterList />
      <ScheduleSection />
      {/* <FoodSection /> */}
      {/* <TopicsSection /> */}
    </Box>
  );
};

export default Page;
