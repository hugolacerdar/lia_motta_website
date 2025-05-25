import { Box, HStack, Center, Link as ChakraLink, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoTiktok, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";

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
    <Box
      position="relative"
      _before={
        isHome
          ? {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, transparent, white)",
              zIndex: -1,
            }
          : undefined
      }
    >
      <Box py="50px">
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
    </Box>
  );
}
