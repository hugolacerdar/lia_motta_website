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
  const [opacity, setOpacity] = useState("1");
  const [filter, setFilter] = useState("none");

  function imageTransition() {
    let switchImage = image === images[0] ? images[1] : images[0];

    setFilter("blur(2px)");
    setTimeout(() => {
      setImage(switchImage);
      setFilter("none");
    }, 200);
  }

  return (
    <Box overflow="hidden" borderRadius="3px">
      <Image
        src={image.url}
        onMouseEnter={imageTransition}
        onMouseLeave={imageTransition}
        alt={image.alt}
        w="100%"
        bg="white"
        opacity={opacity}
        filter={filter}
        transition="filter 200ms"
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
          <Flex w="100%" justifyContent="space-between">
            <Heading fontSize="xl" fontWeight="400">
              {title}
            </Heading>
            <Text>{price}</Text>
          </Flex>
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
