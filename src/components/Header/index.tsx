import { Flex, Link } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import NavLink from "./NavLink";
import Logo from "./Logo";

export default function Header() {
  const { asPath } = useRouter();

  const isHome = asPath === "/";

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo color={isHome ? "white" : "black"} />

      <Flex align="center" ml="auto">
        <HStack spacing="9" color={isHome ? "white" : "gray.900"}>
          <NavLink href="/">Início</NavLink>
          <NavLink href="/products">Produtos</NavLink>
          <NavLink href="/about">Sobre</NavLink>
          <NavLink href="/contact">Contato</NavLink>
        </HStack>
      </Flex>
    </Flex>
  );
}
