import React from "react";
import { Box, Card, Text } from "@yamada-ui/react";
import Link from "next/link";
import { TopCaption } from "../TopCaption";
import { TopContents } from "../TopContents";

export const ScheduleSection = () => {
  // 今日から1週間の日付（表示用とISO形式）を生成
  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    return {
      display: `${d.getMonth() + 1}/${d.getDate()}`,
      iso: d.toISOString().split("T")[0],
    };
  });

  return (
    <TopContents>
      <TopCaption caption_text="SCHEDULE" />
      <Box as="center">
        <Box
          display="flex"
          w="100%"
          justifyContent="center"
          gap="20px"
          p="5px"
          pb="20px"
        >
          {dates.map((date, idx) => (
            <Link
              href={`/schedules?date=${date.iso}`}
              key={idx}
              style={{ display: "block", width: "100%" }}
            >
              <Card
                w="100%"
                p={0}
                variant="outline"
                borderRadius="5px"
                sx={{
                  aspectRatio: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background 0.5s ease",
                  "&:hover": {
                    background: "blue.500",
                  },
                }}
              >
                <Text fontSize="6xl" textAlign="center">
                  {date.display}
                </Text>
              </Card>
            </Link>
          ))}
        </Box>
      </Box>
    </TopContents>
  );
};
