import { Box, Container } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import {
  HStack,
  Center,
  Link as ChakraLink,
  Icon,
  Text,
  Flex,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoTiktok, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import CreatedBy from "./CreatedBy";

export default function Footer() {
  const { asPath } = useRouter();

  const isHome = asPath === "/";

  const socialLinks = [
    {
      title: "Youtube",
      icon: IoLogoYoutube,
      url: "https://www.youtube.com/c/liamotta",
    },
    {
      title: "Instagram",
      icon: IoLogoInstagram,
      url: "https://www.instagram.com/sorrialia/",
    },
    {
      title: "TikTok",
      icon: IoLogoTiktok,
      url: "https://www.tiktok.com/@sorrialia",
    },
  ];

  return (
    <>
      <Box margin={isHome ? "90vh 0 0 0" : "100px 0 0 0"} py="50px">
        <Center>
          {socialLinks.map((sn) => (
            <ChakraLink
              borderRadius="100%"
              key={sn.title}
              mx="30px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="70px"
              h="70px"
              href={sn.url}
              isExternal
            >
              <Icon as={sn.icon} fontSize="35px" color="gray.900" />
            </ChakraLink>
          ))}
        </Center>
      </Box>
      <CreatedBy />
    </>
  );
}
