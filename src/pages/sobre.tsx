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
        <Stack spacing="20px" mx={["20px", "0", "0", "0"]} textAlign="justify">
          <Text>
            Olá! Eu me chamo Lia Motta. Sou criadora de conteúdo, vegana há mais
            de cinco anos, escritora assídua de diário, amante de doramas e
            k-pop, e cultivo um grande interesse sobre a criação de hábitos que
            alimento por meio de minhas leituras.
          </Text>

          <Text>
            Nasci em julho de 1999 e, desde muito cedo, já gostava de criar
            comunidades (os vários clubinhos quando criança) e de compartilhar
            minhas ideias e conhecimentos (alô bloguinhos que tive na
            adolescência).
          </Text>

          <Text>
            Durante minha vida, passei por muitas coisas complicadas como
            bullying, tricotilomania, depressão, compulsão alimentar e
            ortorexia. E, até meados de 2020, eu não conseguia enxergar muito
            futuro para mim. Costumava ser muito sedentária, extremamente
            ansiosa e procrastinadora, passando grande parte do meu tempo vendo
            vidas alheias na internet ao invés de focar em mim. Além disso,
            minha autoconfiança era ruim demais, pois acreditava que eu não era
            capaz de conquistar nada na minha vida.
          </Text>

          <Text>
            Porém, tudo isso começou a mudar em novembro de 2020, quando
            compreendi que precisava começar a me priorizar, me cuidar, e
            investir minha energia e tempo em mim. A partir de então, comecei a
            mudar, sair da minha zona de conforto, e entrei na jornada mais
            linda e estranha de toda minha vida. Esta jornada envolvia uma
            mudança radical em meus hábitos, escolhas, comportamentos, e
            pensamentos. Hoje, sinto do fundo do meu coração que estou cada dia
            mais conectada com minha autêntica versão e construindo a vida dos
            meus sonhos, pois, com o tempo, fui compreendendo que meu propósito
            aqui na Terra é ajudar os outros a também vivenciarem essa
            transformação. Por isso, resolvi começar a partilhar minha sincera
            evolução pessoal, minha jornada de autoconhecimento e bem-estar a
            fim de poder, de algum modo, motivar e incentivar outras pessoas em
            suas jornadas de crescimento, conhecimento e cuidado.
          </Text>
        </Stack>
      </Grid>
    </Box>
  );
}
