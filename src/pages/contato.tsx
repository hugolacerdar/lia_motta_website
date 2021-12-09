import Head from "next/head";
import { Box, Grid, Image, Text, Stack, Flex, Icon } from "@chakra-ui/react";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <Box maxW={["100vw", "90vw", "90vw", "70vw"]} mx="auto" mt="20px">
      <Head>
        <title>Contato | Lia Motta</title>
      </Head>
      <Flex
        alignItems="center"
        color="gray.500"
        marginBottom="30px"
        ml={["10px", "10px", "10px", "0"]}
      >
        <Link href="/">Início</Link> <Icon as={RiArrowRightSLine} />{" "}
        <Link href="/produtos">Contato</Link>
      </Flex>
      <ContactForm />
    </Box>
  );
}
