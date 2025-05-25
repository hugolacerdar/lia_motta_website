import { Box, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Box
        bgImg="url('/capa-1.png')"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-2"
      />
      <Box minH="calc(100vh - 200px)">
        <Head>
          <title>Início | Lia Motta</title>
          <meta name="description" content="Site de Lia Motta." />
        </Head>
      </Box>
    </>
  );
};

export default Home;
