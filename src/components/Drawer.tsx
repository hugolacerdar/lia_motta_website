import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
} from "@chakra-ui/react";
import { useDrawer } from "../contexts/DrawerContext";
import NavLink from "./NavLink";

export default function SideDrawer() {
  const { isOpen, onClose } = useDrawer();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
      <DrawerOverlay>
        <DrawerContent bg="white" p="4">
          <DrawerCloseButton mt="6" _focus={{ outline: "none" }} />
          <Stack mt="60px">
            <NavLink href="/">Início</NavLink>
            <NavLink href="/produtos">Produtos</NavLink>
            <NavLink href="/sobre">Sobre</NavLink>
            <NavLink href="/agendamentos">Agendamentos</NavLink>
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
