import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";

export default function Footer() {
  const { asPath } = useRouter();

  const isHome = asPath === "/";

  return (
    <>
      {isHome ? <Box h="100vh" w="0" /> : ""}
      <Box h="200px" pos="relative"></Box>
    </>
  );
}
