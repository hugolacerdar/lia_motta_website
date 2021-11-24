import { Text } from "@chakra-ui/layout";

interface LogoProps {
  color: string;
}

export default function Logo({ color }: LogoProps) {
  return <Text color={color}>Lia Motta</Text>;
}
