"use client";
import { useState } from "react";
import { useMovies } from "../../../mock/hooks/useMovies";
import Link from "next/link";
import { MoviesMock } from "../../../mock/types/movies";
import { Box, Flex, Button, Image, Text } from "@yamada-ui/react";

const Page = () => {
  const { movies } = useMovies();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState("");

  if (!Array.isArray(movies)) {
    return <Box>映画データが正しく読み込まれていません。</Box>;
  }

  // YouTubeの通常URLをembed用URLに変換する
  const getEmbedUrl = (url: string) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };

  const openModal = (url: string) => {
    setModalVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideoUrl("");
  };

  return (
    <Box w="100%" maxW="1200px" mx="auto" pt="20px">
      {movies.map((movie: MoviesMock) => (
        <Box
          key={movie.id}
          mb="20px"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
        >
          <Flex direction="row">
            {/* 左側：画像 */}
            <Box width="300px">
              <Image
                src={movie.movieImage?.[0] || movie.thumbnail || "/placeholder.png"}
                alt={movie.movieName || "映画画像"}
                width="300px"
                height="100%"
                objectFit="cover"
              />
            </Box>

            {/* 右側：詳細情報 */}
            <Box width="880px" pl="20px" py="20px" position="relative">
              <Box mb="100px">
                <Text fontSize="2xl" fontWeight="bold" mb="10px">
                  {movie.movieName || "映画タイトル"}
                </Text>
                <Text mb="10px">
                  <strong>監督名：</strong>{movie.director || "不明"}
                </Text>
                <Text mb="10px">
                  <strong>あらすじ：</strong>{movie.summary || "情報なし"}
                </Text>
                <Text mb="10px">
                  <strong>上映時間：</strong>{movie.term ? `${movie.term}分` : "不明"}
                </Text>
              </Box>

              {/* ボタン領域：右側領域の下部から20px上 */}
              <Flex position="absolute" bottom="20px" left="20px" right="20px" gap="20px">
                <Box flex="1">
                  <Button
                    w="100%"
                    bg="blue.600"
                    color="white"
                    _hover={{ bg: "blue.500" }}
                    borderRadius="md"
                    onClick={() => openModal(movie.notice || "")}
                    disabled={!movie.notice}
                  >
                    予告編を見る
                  </Button>
                </Box>
                <Box flex="1">
                  <Link href={movie.link || "#"} passHref>
                    <Button
                      w="100%"
                      bg="gray.600"
                      color="white"
                      _hover={{ bg: "#bbb" }}
                      borderRadius="md"
                      disabled={!movie.link}
                    >
                      映画ホームページへ
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ))}

      {/* モーダル表示 */}
      {isModalOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0,0,0,0.6)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex={1000}
          onClick={closeModal} // 背景クリックで閉じる
        >
          <Box
            position="relative"
            width={{ base: "60%", md: "800px" }}
            bg="white"
            borderRadius="md"
            overflow="hidden"
            onClick={(e) => e.stopPropagation()} // コンテンツ内クリックは閉じない
          >
            <Box
              as="iframe"
              width="100%"
              height="600px"
              src={getEmbedUrl(modalVideoUrl)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Page;
