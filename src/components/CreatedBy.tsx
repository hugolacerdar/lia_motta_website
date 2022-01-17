import { Center, Text, Link as ChakraLink } from "@chakra-ui/react";

export default function CreatedBy() {
  return (
    <Center>
      <Text color="gray.500">
        Desenvolvido por{" "}
        <ChakraLink
          _focus={{ outline: "none" }}
          href="https://www.hugolacerda.dev"
          isExternal
          fontWeight="bold"
        >
          Hugo Lacerda
        </ChakraLink>
      </Text>
    </Center>
  );
}
