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
        <title>Lia Motta | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>
    </Box>
  );
};

export default Home;