import Link from "next/link";
import { Button, Text } from "@chakra-ui/react";
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

interface PaymentButtonProps {
  product: Product;
}

export default function PaymentButton({ product }: PaymentButtonProps) {
  return (
    <>
      <Link href={product.stripeUrl as string} passHref>
        <Button
          mt="30px"
          color="white"
          bgColor="gray.900"
          _hover={{
            bgColor: "white",
            color: "gray.900",
            borderColor: "gray.900",
            border: "1px",
          }}
          _focus={{ outline: "none" }}
          padding="35px"
          w="100%"
        >
          COMPRAR AGORA
        </Button>
      </Link>
      <Text>
        * Ao comprar, você concorda com nossos{" "}
        <Link href="/termos" passHref>
          <Text as="span" color="#78ab78" fontWeight="bold" cursor="pointer">
            Termos de Compra
          </Text>
        </Link>
        .
      </Text>
    </>
  );
}
