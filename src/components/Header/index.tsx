import { Flex, Link, Icon, IconButton } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import NavLink from "./NavLink";
import Logo from "./Logo";
import SideDrawer from "./Drawer";
import { useDrawer } from "../../contexts/DrawerContext";

export default function Header() {
  const { asPath } = useRouter();
  const { onOpen } = useDrawer();

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
      <Logo color={isHome ? "white" : "gray.900"} />

      <Flex
        align="center"
        ml="auto"
        display={["none", "none", "block", "block"]}
      >
        <HStack spacing="9" color={isHome ? "white" : "gray.900"}>
          <NavLink href="/" borderColor="white">
            Início
          </NavLink>
          <NavLink href="/produtos">Produtos</NavLink>
          <NavLink href="/sobre">Sobre</NavLink>
          <NavLink href="/contato">Contato</NavLink>
          <NavLink href="/termos">Termos de Compra</NavLink>
        </HStack>
      </Flex>
      <Flex
        align="flex-end"
        ml="auto"
        display={["block", "block", "none", "none"]}
        _focus={{ outline: "none" }}
      >
        <IconButton
          color={isHome ? "white" : "gray.900"}
          display={["block", "block", "none", "none"]}
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          _focus={{ outline: "none", bg: "transparent" }}
        />
      </Flex>
    </Flex>
  );
}
