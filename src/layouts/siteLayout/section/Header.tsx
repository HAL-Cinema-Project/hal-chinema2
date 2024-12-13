import { Box, Image } from "@yamada-ui/react"

export const Header = () => {
  return (
    <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="50px"
        padding="0 15px"
        bgColor="#1e2a3a"
    >
        <Image
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxH="60%"
            src="/HAL_Cinema_Logo_White.svg"
            objectFit="cover"
            alt="HAL_Cinema_Logo_White"
        />
    </Box>
  )
}
