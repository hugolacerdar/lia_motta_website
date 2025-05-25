import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideDrawer from "./Drawer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex minHeight="100vh" direction="column">
      <Header />
      <SideDrawer />
      <Box flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
} 