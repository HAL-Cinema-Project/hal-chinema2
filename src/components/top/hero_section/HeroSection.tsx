import { Box, Center, Image } from "@yamada-ui/react";
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";

const HeroSection = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Carousel withControls={false} w="99vw" h="100vh" autoplay>
        <CarouselSlide as={Center} overflow="hidden">
          <Image
            alt=""
            src="image/IMG_1801.png"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </CarouselSlide>
        <CarouselSlide as={Center} overflow="hidden">
          <Image
            alt=""
            src="image/IMG_1802.jpg"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </CarouselSlide>
      </Carousel>
    </Box>
  );
};

export default HeroSection;
