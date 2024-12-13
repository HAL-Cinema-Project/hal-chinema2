import { SiteLayoutProps } from "@/interfaces"
import { Box } from "@yamada-ui/react"
import { Header } from "./section"

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
      height="100vh"
    >
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="calc(100% - 50px)"
        sx={{
          overflowY: 'scroll',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
