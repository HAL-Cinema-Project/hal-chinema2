import { Box, Image } from "@yamada-ui/react"
import Link from "next/link"

export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height="50px"
      padding="0 15px"
      bgColor="#121922"
    >
      <Link href="http://localhost:3000">
        <Image
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="30px"
          src="/HAL_Cinema_Logo_White.svg"
          objectFit="cover"
          alt="HAL_Cinema_Logo_White"
          cursor="pointer"
        />
      </Link>
    </Box>
  )
}
