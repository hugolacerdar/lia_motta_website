import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideDrawer from "../components/Header/Drawer";
import { DrawerProvider } from "../contexts/DrawerContext";
import Fonts from "../styles/Fonts";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <DrawerProvider>
        <Header />
        <SideDrawer />
        <Component {...pageProps} />
        <Footer />
      </DrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
