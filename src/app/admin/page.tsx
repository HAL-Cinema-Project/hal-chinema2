"use client";

import { Box, Heading, Text, Button } from "@yamada-ui/react";
import Link from "next/link";
import React from "react";
import Script from 'next/script';

const Page = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      w="100%"
      p="20px"
    >
      <Heading size="lg" mb="10px">
        管理者画面トップページ
      </Heading>
      <Text fontSize="md" mb="20px">
        ここではサイト全体の管理機能にアクセスできます。
      </Text>

      <Box display="flex" gap="20px">
        <Button
          as={Link}
          href="/admin/users"
          variant="outline"
          color="#fff"
          px="40px"
        >
          Users
        </Button>
        <Button
          as={Link}
          href="/admin/movies"
          variant="outline"
          color="#fff"
          px="40px"
        >
          Movies
        </Button>
        <Button
          as={Link}
          href="/admin/schedules"
          variant="outline"
          color="#fff"
          px="40px"
        >
          Schedules
        </Button>
      </Box>
      <Script
        src="https://camp-vol-15-stellar.vercel.app/chatbot.bundle.js"
        strategy="beforeInteractive"
      />
      <Script id="chatbot-initialize" strategy="afterInteractive">
        {`
          initializeChatbot({
            textModelId: 'asst_JrVe4SDlLoZuI0PfshmgcAiv',
            voiceModelId: 'wqxhtikFKS1e5jiapVMd',
            apiUrl: 'https://camp-vol-15-stellar.vercel.app/api/chatbot'
          });
        `}
      </Script>
    </Box>
  );
};

export default Page;
