import Head from "next/head";
import { Box, Grid, Image, Text, Stack, Flex, Icon } from "@chakra-ui/react";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Box maxW={["100vw", "90vw", "90vw", "70vw"]} mx="auto" mt="20px">
      <Head>
        <title>Sobre | Lia Motta</title>
      </Head>
      <Flex
        alignItems="center"
        color="gray.500"
        marginBottom="30px"
        ml={["10px", "10px", "10px", "0"]}
      >
        <Link href="/">Início</Link> <Icon as={RiArrowRightSLine} />{" "}
        <Link href="/produtos">Sobre</Link>
      </Flex>

      <Grid gridTemplateColumns={["1fr", "1fr", "1fr", "1.5fr 2fr"]} gap="30px">
        <Image src="./bio.JPG" alt=""></Image>
        <Stack
          fontSize={["18px", "20px", "22px", "24px"]}
          spacing="20px"
          mx={["20px", "0", "0", "0"]}
          textAlign="justify"
          mb="50px"
        >
          <Text>
              Nascida em julho de 1999, sou uma vegana apaixonada por k-pop e k-dramas, sempre com um livro por perto. A maternidade me apresentou ao Conrado, minha maior inspiração. Por mais de sete anos, a escrita de diários tem sido minha fiel companheira, uma ferramenta essencial na minha jornada com depressão e TDAH. Esta prática não só me oferece clareza e conforto, mas também inspirou a criação de um e-book destinado a orientar e inspirar outros na arte da escrita reflexiva.
          </Text>
          <Text>
              Estudante de psicologia e amante dos pequenos prazeres encontrados em cafés, minha vida é um constante aprendizado sobre mim mesma e sobre como ajudar os outros. Através da escrita, eu me desvendo e compartilho essas descobertas, espero que meu e-book possa ser uma luz para quem busca autoconhecimento e expressão.
          </Text>
        </Stack>
      </Grid>
    </Box>
  );
}
