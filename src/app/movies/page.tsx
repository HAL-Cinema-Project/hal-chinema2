"use client";
import { useMovies } from "../../../mock/hooks/useMovies";
import Link from "next/link";
import { MoviesMock } from "../../../mock/types/movies";
import { Box, Flex, Button, Image, Text } from "@yamada-ui/react";

const Page = () => {
  const { movies } = useMovies();

  if (!Array.isArray(movies)) {
    return <Box>映画データが正しく読み込まれていません。</Box>;
  }

  return (
    <Box p="20px" w="100%" maxW="1000px" mx="auto">
      <Flex wrap="wrap" gap="20px" justify="flex-start">
        {movies.map((item: MoviesMock) => (
          <Box
          key={item.id}
          width="302px"
          borderWidth="1px"
          borderColor="gray.200"
          p="10px"
          borderRadius="md"
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Image
              src={item.movieImage?.[0] || "/placeholder.png"}
              alt={item.movieName || "映画タイトル"}
              width="280px"
              height="400px"
              objectFit="cover"
              borderRadius="md"
              mb="10px"
            />
            <Text mb="10px" fontWeight="bold" textAlign="center">
              {item.movieName || "映画タイトル"}
            </Text>
            <Text mb="10px" textAlign="center">
              <span>監督名：</span>
              <span>{item.director || "不明"}</span>
            </Text>
          </Box>
          <Flex justify="center" mt="auto">
            <Link href={item.link || "#"} passHref>
              <Button
                w="200"
                bg="gray.600"
                color="white"
                _hover={{
                  bg: "#bbb",
                }}
                borderRadius="md"
                disabled={!item.link}
              >
                詳細へ
              </Button>
            </Link>
          </Flex>
        </Box>
        
        ))}
      </Flex>
    </Box>
  );
};

export default Page;
