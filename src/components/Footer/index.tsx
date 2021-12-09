import { Box, Container } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { HStack, Link, Icon, Text, Flex } from "@chakra-ui/react";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";

export default function Footer() {
  const { asPath } = useRouter();

  const isHome = asPath === "/";

  const socialLinks = [
    {
      title: "Instagram",
      icon: RiInstagramLine,
      url: "https://www.instagram.com/sorrialia/",
    },
    {
      title: "TikTok",
      icon: IoLogoTiktok,
      url: "https://www.tiktok.com/@sorrialia",
    },
  ];

  return <></>;
}
