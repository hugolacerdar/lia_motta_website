import Head from "next/head";
import { Box, Grid, Image, Text, Stack, Flex, Icon, Heading } from "@chakra-ui/react";
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
        <Link href="/" legacyBehavior>
          <a>Início</a>
        </Link>{" "}
        <Icon as={RiArrowRightSLine} />{" "}
        <Link href="/sobre" legacyBehavior>
          <a>Sobre</a>
        </Link>
      </Flex>

      <Grid gridTemplateColumns={["1fr", "1fr", "1fr", "1.5fr 2fr"]} gap="30px">
        <Box>
          <Image 
            src="/sobremim.jpg" 
            alt="Foto de Lia Motta sorrindo, com cabelos longos e escuros, em um ambiente iluminado pela luz natural"
            borderRadius="md"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </Box>
        <Stack
          fontSize={["16px", "18px", "18px", "18px"]}
          spacing="24px"
          mx={["20px", "0", "0", "0"]}
          textAlign="justify"
          mb="50px"
        >
          <Text>
            Meu nome é Nathália, mas sou mais conhecida como Lia. Sou mãe, vegana, amo tomar café (e matchá), escritora de diários há 8 anos – prática terapêutica que amo – e amo ler romances bobinhos com o mesmo prazer e entusiasmo com que mergulho em artigos científicos densos.
          </Text>

          <Stack spacing={3}>
            <Heading as="h2" size="md" color="gray.700" mt={2}>
              Atendimento Especializado
            </Heading>
            <Text>
              Sou psicóloga e atendo <Text as="span" fontWeight="600" color="gray.700">exclusivamente mulheres e mulheres-mães, maiores de 18 anos</Text>, de forma on-line. Ofereço atendimento individualizado, humanizado e baseado em acolhimento e ciência. Minha escuta é afetiva, respeitosa e comprometida com o que te atravessa. Ah, tenho capacitação em Saúde Mental da Mulher pela USP e sou pós-graduanda em Neuropsicologia pelo Instituto Israelita Albert Einstein.
            </Text>
          </Stack>

          <Stack spacing={3}>
            <Heading as="h2" size="md" color="gray.700" mt={2}>
              Abordagem Terapêutica
            </Heading>
            <Text>
              Trabalho com a <Text as="span" fontWeight="600" color="gray.700">Terapia Cognitivo-Comportamental (TCC)</Text>, abordagem reconhecida como padrão-ouro para tratamento de diversas questões de saúde mental, e com a <Text as="span" fontWeight="600" color="gray.700">Terapia Focada na Compaixão (CFT)</Text>, uma abordagem consiliente que integra neurociência, teoria do apego e práticas de regulação emocional.
            </Text>
          </Stack>

          <Text>
            E eu escolhi acompanhar somente mulheres porque reconheço que a saúde mental da mulher é atravessada por muitas camadas e particularidades — e tudo isso merece ser compreendido com um olhar integral, com afeto e com ciência.
          </Text>

          <Text>
            Uma das minhas funções, como sua psicóloga, é te acompanhar na construção de uma vida com mais sabedoria e coragem. Uma vida mais gostosa, mais leve, mais divertida de ser vivida.
          </Text>

          <Text>
            O processo, já adianto, não é simples. Nem sempre é leve. Muitas vezes, é o oposto. Mas vale a pena. Porque viver pode ser confuso, cansativo, complicado...mas também pode ser bonito. Bonito de verdade.
          </Text>

          <Text>
            E eu estou aqui para caminhar junto com você.<br />
            Vamos?
          </Text>

          <Text fontWeight="bold" mt={4}>
            Nathália da Motta Carvalho Faria | CRP 06/220308
          </Text>
        </Stack>
      </Grid>
    </Box>
  );
}
