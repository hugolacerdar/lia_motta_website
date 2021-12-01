import { Box, Container } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box
      bgImg="url('/bg_test.JPG')"
      bgSize="100%"
      bgRepeat="no-repeat"
      w="100vw"
      h="100vh"
      pos="absolute"
      top="-5"
      left="0"
      zIndex="-2"
    >
      <Head>
        <title>Início | Lia Motta</title>
        <meta name="description" content="Site de Lia Motta." />
      </Head>

      <h1>Home</h1>
    </Box>
  );
};

export default Home;
