import { Image } from "@chakra-ui/image";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Container,
  Flex,
  Icon,
  Grid,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Link from "next/link";
import Head from "next/head";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMailSendLine,
} from "react-icons/ri";

import "pure-react-carousel/dist/react-carousel.es.css";
import { ParsedUrlQuery } from "querystring";

import { getPrismicClient } from "../../services/prismic";

interface Params extends ParsedUrlQuery {
  slug: string;
}
interface Image {
  dimensions: { width: number; height: number };
  alt: string;
  url: string;
}
interface Product {
  title: string;
  description: string;
  price: number;
  stripeUrl: string;
  slug: string;
  updatedAt: Date;
  images: Image[];
}

interface SingleProductPageProps {
  product: Product;
}

export default function SingleProductPage({ product }: SingleProductPageProps) {
  return (
    <Box maxW={["100vw", "90vw", "90vw", "70vw"]} mx="auto">
      <Head>
        <title>{product.title} | Lia Motta</title>
      </Head>
      <Flex
        alignItems="center"
        color="gray.500"
        marginBottom="30px"
        ml={["10px", "10px", "10px", "0"]}
      >
        <Link href="/">Home</Link> <Icon as={RiArrowRightSLine} />{" "}
        <Link href="/produtos">Produtos</Link> <Icon as={RiArrowRightSLine} />{" "}
        {product.title}{" "}
      </Flex>
      <Grid gridTemplateColumns={["1fr", "1fr", "1fr", "1.5fr 2fr"]} gap="30px">
        <Container maxW={["320px", "350px", "400px", "400px"]}>
          <CarouselProvider
            naturalSlideWidth={1080}
            naturalSlideHeight={1350}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  w={375}
                />
              </Slide>
              <Slide index={1}>
                <Image
                  src={product.images[1].url}
                  alt={product.images[0].alt}
                  w={375}
                />
              </Slide>
              <Slide index={2}>
                <Image
                  src={product.images[2].url}
                  alt={product.images[0].alt}
                  w={375}
                />
              </Slide>
            </Slider>
            <Flex
              justifyContent="center"
              maxW={["320px", "350px", "400px", "400px"]}
              mt="10px"
            >
              <ButtonBack>
                <Icon as={RiArrowLeftSLine} w={8} h={8} mr={10} />
              </ButtonBack>
              <ButtonNext>
                <Icon as={RiArrowRightSLine} w={8} h={8} ml={10} />
              </ButtonNext>
            </Flex>
          </CarouselProvider>
        </Container>
        <Box mx={["10px", "10px", "10px", "0"]}>
          <Heading size="lg" mb="20px">
            {product.title}
          </Heading>
          <Box
            as="div"
            ml={["10px", "10px", "10px", "0"]}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          {product.price > 0 ? (
            <Link href={product.stripeUrl} passHref>
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
          ) : (
            <Grid
              gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "1.5fr 1fr"]}
              mt="30px"
            >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={RiMailSendLine} color="gray.900" />
                </InputLeftElement>
                <Input
                  borderColor="gray.900"
                  borderTopRightRadius={[
                    "var(--chakra-radii-md)",
                    "var(--chakra-radii-md)",
                    "var(--chakra-radii-md)",
                    "var(--chakra-radii-md)",
                    "0",
                  ]}
                  borderBottomRightRadius="0"
                  borderBottomLeftRadius={[
                    "0",
                    "0",
                    "0",
                    "0",
                    "var(--chakra-radii-md)",
                  ]}
                  borderRight={[
                    "solid 1px gray.900",
                    "solid 1px gray.900",
                    "solid 1px gray.900",
                    "solid 1px gray.900",
                    "none",
                  ]}
                  _focus={{ outline: "none", backgroundColor: "gray.100" }}
                  _hover={{ backgroundColor: "gray.100" }}
                />
              </InputGroup>
              <Button
                borderBottomLeftRadius={[
                  "var(--chakra-radii-md)",
                  "var(--chakra-radii-md)",
                  "var(--chakra-radii-md)",
                  "var(--chakra-radii-md)",
                  "0",
                ]}
                borderTopLeftRadius="0"
                borderTopRightRadius={[
                  "0",
                  "0",
                  "0",
                  "0",
                  "var(--chakra-radii-md)",
                ]}
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
                RECEBER WORKBOOK
              </Button>
            </Grid>
          )}
        </Box>
      </Grid>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params as Params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID("produto", String(slug), {});

  const product = {
    slug,
    title: response.data.titulo[0].text,
    description: RichText.asHtml(response.data.descricao),
    price: response.data.preco,
    stripeUrl: response.data.pagamento.url,
    updatedAt: new Date(
      response.last_publication_date as string
    ).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    images: Object.values(response.data.imagens[0]),
  };

  return {
    props: {
      product,
    },
  };
};
