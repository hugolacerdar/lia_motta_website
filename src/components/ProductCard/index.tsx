import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

interface Image {
  dimensions: { width: number; height: number };
  alt: string;
  url: string;
}

interface ProductCardProps {
  title: string;
  price: number;
  slug: string;
  updatedAt: Date;
  images: Image[];
}

export default function ProductCard({
  title,
  slug,
  updatedAt,
  price,
  images,
}: ProductCardProps) {
  const [image, setImage] = useState(images[0]);

  return (
    <Box overflow="hidden" borderRadius="3px">
      <Image
        src={image.url}
        onMouseEnter={() => setImage(images[1])}
        onMouseLeave={() => setImage(images[0])}
        alt={image.alt}
        w="100%"
        bg="white"
      />
      <Flex
        pt="3"
        align="center"
        justify="space-between"
        bg="white"
        borderTop="0"
        borderRadius="0 0 3px 3px"
      >
        <Flex direction="column" w="100%">
          <Heading fontSize="xl" fontWeight="500">
            {title} - {price}
          </Heading>
          <Link href={`/produtos/${slug}`} passHref>
            <Button
              mt="10px"
              color="white"
              bgColor="gray.900"
              _hover={{
                bgColor: "white",
                color: "gray.900",
                borderColor: "gray.900",
                border: "1px",
              }}
              _focus={{ outline: "none" }}
              w="100%"
            >
              SAIBA MAIS
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
