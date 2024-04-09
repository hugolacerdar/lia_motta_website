import { Box, Container } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box
      bgImg="url('/capa-1.png')"
      bgSize="cover"
      bgPos="center"
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
    </Box>
  );
};

export default Home;
