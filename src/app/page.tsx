import { FoodSection } from "@/components/top/food/FoodSection";
import HeroSection from "@/components/top/hero_section/HeroSection";
import { MovieList } from "@/components/top/movie_list/MovieList";
import { TheaterList } from "@/components/top/theater_list/TheaterList";
import { TopicsSection } from "@/components/top/topics/TopicsSection";
import { Box } from "@yamada-ui/react";
import React from "react";

const Page = () => {
  return (
    <Box minH="100vh">
      {" "}
      {/* レイアウト崩れ防止 */}
      <HeroSection />
      <Box>
        <MovieList />
        <TheaterList />
        <FoodSection />
        <TopicsSection />
      </Box>
    </Box>
  );
};

export default Page;
