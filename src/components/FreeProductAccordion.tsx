import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  Link,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { RiExternalLinkFill } from "react-icons/ri";

interface Product {
  title: string;
  description: string;
  price: number;
  pixDiscount: number;
  stripeUrl?: string;
  qrCode?: { imageUrl: string; code: string };
  productLink?: string;
  slug: string;
  updatedAt: string;
}

interface FreeProductAccordionProps {
  product: Product;
}

export default function FreeProductAccordion({
  product,
}: FreeProductAccordionProps) {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton
            borderRadius="var(--chakra-radii-md)"
            mt="20px"
            color="white"
            bgColor="gray.900"
            _hover={{
              bgColor: "white",
              color: "gray.900",
              borderColor: "gray.900",
              border: "1px",
            }}
            _focus={{ outline: "none" }}
            padding="25px"
            w="100%"
          >
            <Box
              flex="1"
              textAlign="center"
              fontWeight="bold"
              textTransform="uppercase"
            >
              QUERO BAIXAR GRATUITAMENTE
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text mt="30px">Clique no nome dos arquivos que deseja acessar:</Text>
          <Flex alignItems="center" mt="20px">
            <Link href={product.productLink as string} isExternal>
              <Heading size="md" cursor="pointer">
                {product.title}
              </Heading>
            </Link>
            <Icon as={RiExternalLinkFill} fontSize="20px" ml="4px" />
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
