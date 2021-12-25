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
          <ListItem>
            Todos os produtos são digitais, mas também podem ser utilizados
            impressos, caso prefira;
          </ListItem>
          <ListItem>Não aceitamos devoluções;</ListItem>
          <ListItem>Não aceitamos cancelamentos;</ListItem>
          <ListItem>
            Caso você tenha qualquer dificuldade em acessar sua compra mande um
            email para contato@liamotta.com detalhando sua situação;
          </ListItem>
          <ListItem>
            O envio dos produtos é realizado dentro de 24 horas a partir da
            confirmação do pagamento quando em dias úteis, tanto para as compras
            com cartão, quanto para as via PIX. Já as compras realizadas nos
            finais de semana ou feriados são enviadas dentro do próximo dia
            útil.
          </ListItem>
          <ListItem>
            Caso você efetue sua compra via PIX, não se esqueça de enviar o
            comprovante para contato@liamotta.com.
          </ListItem>
        </OrderedList>{" "}
      </Box>
    </Box>
  );
}
