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
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Text,
  FormControl,
  FormLabel,
  Switch,
  Link as ChakraLink,
  useClipboard,
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
  RiCheckLine,
  RiFileCopyLine,
  RiExternalLinkFill,
  RiQrCodeFill,
} from "react-icons/ri";

import "pure-react-carousel/dist/react-carousel.es.css";
import { ParsedUrlQuery } from "querystring";

import { getPrismicClient } from "../../services/prismic";
import formatMoney from "../../utils/formatMoney";
import { useState } from "react";

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
  pixDiscount: number;
  stripeUrl?: string;
  qrCode?: { imageUrl: string; code: string };
  productLink?: string;
  slug: string;
  updatedAt: string;
  images: Image[];
}

interface SingleProductPageProps {
  product: Product;
}

export default function SingleProductPage({ product }: SingleProductPageProps) {
  return (
    <Box
      maxW={["100vw", "90vw", "90vw", "70vw"]}
      mx="auto"
      mt="20px"
      minH="85vh"
    >
      <Head>
        <title>{product.title} | Lia Motta</title>
      </Head>
      <Flex
        alignItems="center"
        color="gray.500"
        marginBottom="30px"
        ml={["10px", "10px", "10px", "0"]}
      >
        <Link href="/">Início</Link> <Icon as={RiArrowRightSLine} />{" "}
        <Link href="/produtos">Produtos</Link> <Icon as={RiArrowRightSLine} />{" "}
        {product.title}{" "}
      </Flex>
      <Grid
        gridTemplateColumns={["1fr", "1fr", "1fr", "1.5fr 1.2fr"]}
        gap="30px"
      >
        <Container maxW={["320px", "350px", "500px", "500px"]}>
          <CarouselProvider
            naturalSlideWidth={1080}
            naturalSlideHeight={1350}
            totalSlides={product.images.length}
          >
            <Slider>
              {product.images.map((image, index) => (
                <Slide key={image.url} index={index}>
                  <Image src={image.url} alt={image.alt} w={500} />
                </Slide>
              ))}
            </Slider>
            <Flex
              justifyContent="center"
              maxW={["320px", "350px", "500px", "500px"]}
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
          <Flex justifyContent="space-between">
            <Heading size="lg" mb="20px">
              {product.title}
            </Heading>
            <Heading size="lg" fontWeight="regular">
              {formatMoney(product.price)}
            </Heading>
          </Flex>
          <Box
            as="div"
            ml={["10px", "10px", "10px", "0"]}
            textAlign="justify"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          {product.price > 0 && product.stripeUrl ? (
            <>
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
              <Text>
                * Ao comprar, você concorda com nossos{" "}
                <Link href="/termos" passHref>
                  <Text
                    as="span"
                    color="#78ab78"
                    fontWeight="bold"
                    cursor="pointer"
                  >
                    Termos de Compra
                  </Text>
                </Link>
                .
              </Text>
            </>
          ) : (
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
                  <Text mt="30px">
                    Clique no nome dos arquivos que deseja acessar:
                  </Text>
                  <Flex alignItems="center" mt="20px">
                    <ChakraLink href={product.productLink as string} isExternal>
                      <Heading size="md" cursor="pointer">
                        {product.title}
                      </Heading>
                    </ChakraLink>
                    <Icon as={RiExternalLinkFill} fontSize="20px" ml="4px" />
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
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

  const images = Object.values(response.data.imagens[0]) as Image[];
  const filteredImages = images.filter((image) => !!image.url);

  let product: Product = {
    slug,
    title: response.data.titulo[0].text,
    description: RichText.asHtml(response.data.descricao),
    price: response.data.preco,
    updatedAt: new Date(
      response.last_publication_date as string
    ).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    images: filteredImages,
    pixDiscount: response.data.porcentagem_desconto_pix,
  };

  let stripeUrl;
  if (response.data.qrcode.alt) {
    (stripeUrl = response.data.pagamento.url),
      (product = { ...product, stripeUrl });
  }
  let qrCode;
  if (response.data.qrcode.alt) {
    qrCode = {
      imageUrl: response.data.qrcode.url,
      code: response.data.qrcode.alt,
    };
    product = { ...product, qrCode };
  }
  let productLink;
  if (response.data.link_de_download.url) {
    productLink = response.data.link_de_download.url;
    product = { ...product, productLink };
  }

  return {
    props: {
      product,
    },
  };
};
