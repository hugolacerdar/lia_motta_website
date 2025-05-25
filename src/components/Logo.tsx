import { Heading, Text } from "@chakra-ui/react";

interface LogoProps {
  color: string;
}

export default function Logo({ color }: LogoProps) {
  return <Heading color={color}>lia motta</Heading>;
}
