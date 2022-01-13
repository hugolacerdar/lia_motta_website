import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideDrawer from "../components/Header/Drawer";
import { DrawerProvider } from "../contexts/DrawerContext";
import { theme } from "../styles/theme";
import NProgress from "nprogress";
import Router from "next/router";
import "../components/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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
