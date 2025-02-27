// import React from "react";

// import { Box, Text, Image } from "@yamada-ui/react";
// import { TopCaption } from "../TopCaption";

// export const TheaterList = () => {
//   return (
//     <Box h={"100vh"}>
//       <Box pl={"40px"}>
//         <TopCaption caption_text="THEATERS" />
//       </Box>
//       <Box as={"center"}>
//         <Box display="flex" w="100%" py={"20px"}>
//           <Box flex={1}>
//             <Image
//               w="100%"
//               src="image/hal_osaka.jpg"
//               alt="HAL大阪"
//               objectFit="cover"
//             />
//           </Box>
//           <Box flex={1}>
//             <Image
//               w="100%"
//               src="image/hal_nagoya.jpg"
//               alt="HAL名古屋"
//               objectFit="cover"
//             />
//           </Box>
//           <Box flex={1}>
//             <Image
//               w="100%"
//               src="image/hal_tokyo.jpg"
//               alt="HAL東京"
//               objectFit="cover"
//             />
//           </Box>
//           <Box
//             display={"flex"}
//             justifyContent={"center"}
//             alignItems={"center"}
//             flex={1}
//             w={"100%"}
//             background={"#121c4a"}
//           >
//             <Text fontSize={"2rem"}>劇場一覧 &gt;</Text>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };



import React from "react";
import { Box, Button, Card, CardBody, CardHeader, Image, Text } from "@yamada-ui/react";
import Link from "next/link";
import { TopCaption } from "../TopCaption";
import { TopContents } from "../TopContents";

export const TheaterList = () => {
  return (
    <TopContents>
      <TopCaption caption_text="THEATERS" />
      <Box as="center">
        <Box display="flex" w="100%" justifyContent="center" gap="20px" pb="20px">

          {/* Theater Card 3 */}
          <Card w="100%" p={0} variant="outline" borderRadius="5px">
            <CardHeader
              p={0}
              sx={{
                width: "100%",
                aspectRatio: "1",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px 5px 0 0",
              }}
            >
              <Image
                src="image/hal_tokyo.jpg"
                alt="HAL名古屋劇場"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px 5px 0 0",
                }}
              />
            </CardHeader>
            <CardBody p={3}>
              <Text w={"100%"} textAlign="center" isTruncated>
                HAL東京劇場
              </Text>
            </CardBody>
          </Card>

          {/* Theater Card 2 */}
          <Card w="100%" p={0} variant="outline" borderRadius="5px">
            <CardHeader
              p={0}
              sx={{
                width: "100%",
                aspectRatio: "1",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px 5px 0 0",
              }}
            >
              <Image
                src="image/hal_nagoya.jpg"
                alt="HAL名古屋劇場"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px 5px 0 0",
                }}
              />
            </CardHeader>
            <CardBody p={3}>
              <Text w={"100%"} textAlign="center" isTruncated>
                HAL名古屋劇場
              </Text>
            </CardBody>
          </Card>

          {/* Theater Card 1 */}
          <Card w="100%" p={0} variant="outline" borderRadius="5px">
            <CardHeader
              p={0}
              sx={{
                width: "100%",
                aspectRatio: "1",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px 5px 0 0",
              }}
            >
              <Image
                src="image/hal_osaka.jpg"
                alt="HAL名古屋劇場"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px 5px 0 0",
                }}
              />
            </CardHeader>
            <CardBody p={3}>
              <Text w={"100%"} textAlign="center" isTruncated>
                HAL大阪劇場
              </Text>
            </CardBody>
          </Card>
        </Box>

        <Link href="/theaters">
          <Button variant="outline" color="#fff" px="50px">
            もっと見る
          </Button>
        </Link>
      </Box>
    </TopContents>
  );
};
