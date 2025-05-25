import Link from "next/link";
import { Button } from "@chakra-ui/react";
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
    <Link href={product.stripeUrl as string} legacyBehavior passHref>
      <Button
        as="a"
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
  );
}
