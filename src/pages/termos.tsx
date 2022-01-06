import Head from "next/head";
import {
  Box,
  Text,
  Flex,
  Icon,
  OrderedList,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

export default function TermsPage() {
  return (
    <Box
      maxW={["100vw", "90vw", "90vw", "70vw"]}
      mx="auto"
      mt="20px"
      minH="57vh"
    >
      <Head>
        <title>Termos de Compra | Lia Motta</title>
      </Head>
      <Flex
        alignItems="center"
        color="gray.500"
        marginBottom="30px"
        ml={["10px", "10px", "10px", "0"]}
      >
        <Link href="/">Início</Link> <Icon as={RiArrowRightSLine} />{" "}
        <Link href="/produtos">Termos de Compra</Link>
      </Flex>
      <Box mx={["20px", "0", "0", "0"]}>
        <Heading size="lg">Termos de Compra</Heading>
        <Text fontSize="lg" my="20px">
          Quando você faz uma compra neste site, você está de acordo com as
          seguintes políticas:
        </Text>
        <OrderedList textAlign="justify" fontSize="lg">
          <ListItem>Todos os produtos são digitais;</ListItem>
          <ListItem>
            Não autorizamos o compartilhamento de qualquer produto;
          </ListItem>
          <ListItem>
            Após a aprovação do pagamento, o produto será enviado em até 24
            horas quando em dias úteis ou no próximo dia útil aos finais de
            semana e feriados.
          </ListItem>
          <ListItem>
            Nosso atendimento funciona de segunda a sexta, das 09h00 às 18h00,
            exclusivamente pelo e-mail contato@liamotta.com, pois não resolvemos
            situações relacionadas a compras no site por outros canais;
          </ListItem>
          <ListItem>
            Caso você tenha qualquer dificuldade em acessar sua compra mande um
            email para contato@liamotta.com detalhando sua situação;
          </ListItem>
          <ListItem>Não aceitamos devoluções;</ListItem>
          <ListItem>Não aceitamos cancelamentos.</ListItem>
        </OrderedList>
      </Box>
    </Box>
  );
}
