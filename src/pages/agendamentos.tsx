import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { Box, Flex, Icon } from "@chakra-ui/react";
import { RiArrowRightSLine } from "react-icons/ri";

const AgendamentosContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const WaitingListButton = styled.a`
  display: inline-block;
  background-color: var(--chakra-colors-gray-900);
  color: white;
  padding: 1rem 2rem;
  border-radius: var(--chakra-radii-md);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: var(--chakra-colors-gray-900);
    border-color: var(--chakra-colors-gray-900);
  }

  &:focus {
    outline: none;
  }
`;

const Agendamentos: NextPage = () => {
  const waitingListUrl = process.env.NEXT_PUBLIC_WAITING_LIST_URL;

  if (!waitingListUrl) {
    console.error('Waiting list URL is not defined in environment variables');
  }

  return (
    <Box maxW={["100vw", "90vw", "90vw", "70vw"]} mx="auto" mt="20px">
      <Head>
        <title>Agendamentos - Lia Motta</title>
        <meta name="description" content="Informações sobre agendamentos de consultas com Lia Motta" />
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
        <Link href="/agendamentos" legacyBehavior>
          <a>Agendamentos</a>
        </Link>
      </Flex>

      <AgendamentosContainer>
        <Title>Agendamentos</Title>
        <Message>
          No momento, minha agenda está completa. Porém, você pode entrar em minha lista de espera,
          e assim que houver disponibilidade de horários, entrarei em contato com você.
        </Message>
        <Message>
          Para se inscrever na lista de espera, clique no botão abaixo e preencha o formulário.
          Prometo que não vai demorar mais que 5 minutos!
        </Message>
        <WaitingListButton 
          href={waitingListUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Entrar na Lista de Espera
        </WaitingListButton>
      </AgendamentosContainer>
    </Box>
  );
};

export default Agendamentos; 