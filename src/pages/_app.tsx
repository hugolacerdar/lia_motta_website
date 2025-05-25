import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { DrawerProvider } from "../contexts/DrawerContext";
import { theme } from "../styles/theme";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../components/nprogress.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleComplete = () => NProgress.done();
    const handleError = () => NProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
    };
  }, [router]);

  return (
    <ChakraProvider theme={theme}>
      <DrawerProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
