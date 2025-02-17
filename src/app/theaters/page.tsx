"use client";
import React from "react";
import { Box, Flex, Button, Image, Text } from "@yamada-ui/react";

const Page = () => {
  // ハードコーディングされた劇場データ（東京、名古屋、大阪の順）
  const theaters = [
    {
      image: "image/hal_tokyo.jpg",
      name: "HAL東京劇場",
      detail:
        "HAL東京劇場は最新の技術を取り入れた先進的な施設で、多彩なイベントや上映会を開催する都市のシンボルです。",
      address: "〒160-0023 東京都新宿区西新宿１丁目７−３ 総合校舎コクーンタワ",
      count: 8,
      mapLink:
        "https://www.google.co.jp/maps/place/HAL%E6%9D%B1%E4%BA%AC/@35.6915849,139.6943858,17z/data=!3m2!4b1!5s0x60188cd697948c57:0x91396f1d50f81605!4m6!3m5!1s0x60188d9090c03e2f:0x3de1c61ba2a4ac68!8m2!3d35.6915849!4d139.6969607!16s%2Fg%2F11t0m8x0wh?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
      siteLink: "https://www.hal.ac.jp/tokyo"
    },
    {
      image: "image/hal_nagoya.jpg",
      name: "HAL名古屋劇場",
      detail:
        "HAL名古屋劇場は地域に根ざしたエンターテインメント施設で、映画やライブイベントを通して市民に感動を提供しています。",
      address: "〒450-0002 愛知県名古屋市中村区名駅４丁目２７−１ 総合校舎スパイラルタワーズ",
      count: 8,
      mapLink:
        "https://www.google.co.jp/maps/place/HAL%E5%90%8D%E5%8F%A4%E5%B1%8B/@35.1681223,136.8856259,17z/data=!3m1!4b1!4m6!3m5!1s0x600376de618547db:0x76435e49b7e59323!8m2!3d35.1681223!4d136.8856259!16s%2Fg%2F121s4gxj?authuser=0&hl=ja&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
      siteLink: "https://www.hal.ac.jp/nagoya"
    },
    {
      image: "image/hal_osaka.jpg",
      name: "HAL大阪劇場",
      detail:
        "HAL大阪劇場は最新の設備を備えた多目的施設で、国内外の映画祭やイベントが盛大に開催される拠点となっています。",
      address: "〒530-0001 大阪府大阪市北区梅田３丁目３−１",
      count: 8,
      mapLink:
        "https://www.google.co.jp/maps/place/HAL%E5%A4%A7%E9%98%AA/@34.6998434,135.4904714,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e728ba376c79:0x3880b1f8cc20187e!8m2!3d34.6998434!4d135.4930463!16s%2Fg%2F11tc8lvcpz?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
      siteLink: "https://www.hal.ac.jp/osaka"
    }
  ];

  return (
    <Box w="100%" maxW="1200px" mx="auto" pt="20px">
      {theaters.map((theater, index) => (
        <Box
          key={index}
          mb="20px"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
        >
          <Flex direction="row">
            {/* 左側：劇場画像 */}
            <Box width="300px">
              <Image
                src={theater.image}
                alt={theater.name || "劇場画像"}
                width="300px"
                height="100%"
                objectFit="cover"
              />
            </Box>

            {/* 右側：詳細情報 */}
            <Box width="880px" pl="20px" py="20px" position="relative">
              <Box mb="100px">
                <Text fontSize="2xl" fontWeight="bold" mb="10px">
                  {theater.name}
                </Text>
                <Text mb="10px">
                  <strong>劇場詳細：</strong>
                  {theater.detail}
                </Text>
                <Text mb="10px">
                  <strong>住所：</strong>
                  {theater.address}
                </Text>
                <Text mb="10px">
                  <strong>劇場数：</strong>
                  {theater.count}
                </Text>
              </Box>

              {/* ボタン領域：右側領域の下部から20px上 */}
              <Flex position="absolute" bottom="20px" left="20px" right="20px" gap="20px">
                <Box flex="1">
                  <a href={theater.mapLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      w="100%"
                      bg="green.600"
                      color="white"
                      _hover={{ bg: "green.500" }}
                      borderRadius="md"
                      disabled={!theater.mapLink}
                    >
                      地図リンク
                    </Button>
                  </a>
                </Box>
                <Box flex="1">
                  <a href={theater.siteLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      w="100%"
                      bg="gray.600"
                      color="white"
                      _hover={{ bg: "#bbb" }}
                      borderRadius="md"
                      disabled={!theater.siteLink}
                    >
                      サイトリンク
                    </Button>
                  </a>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Page;
