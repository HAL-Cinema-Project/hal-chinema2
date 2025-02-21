import { Box, Center } from "@yamada-ui/react";
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";

const HeroSection = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Carousel withControls={false} w={"99vw"} h={"100vh"}>
        <CarouselSlide bg="primary">1</CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>
    </Box>
  );
};

export default HeroSection;
