import {
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  href: string;
}

export default function NavLink({ children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref shouldMatchExactHref={true}>
      <ChakraLink
        display="flex"
        align="center"
        {...rest}
        textTransform="uppercase"
        _focus={{ outline: "none" }}
        _hover={{ textDecor: "none" }}
      >
        <Text fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}
