import { Box } from "@yamada-ui/react";
import { ReactNode } from "react";

type TopContentsProps = {
  children: ReactNode;
};

export const TopContents = ({ children }: TopContentsProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      w={"1400px"}
      h={"100vh"}
      margin={"auto"}
      my={"40px"}
    >
      {children}
    </Box>
  );
};
