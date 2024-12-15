import { Box } from "@yamada-ui/react";
import { ReactNode } from "react";

type TopContentsProps = {
  children: ReactNode;
};

export const TopContents = ({ children }: TopContentsProps) => {
  return (
    <Box py="40px" bgColor="#15202B">
      {children}
    </Box>
  );
};
