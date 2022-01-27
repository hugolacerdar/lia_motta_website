import { Image } from "@chakra-ui/image";
import { Container, Flex, Icon, Grid, Box, Heading } from "@chakra-ui/react";
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
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import "pure-react-carousel/dist/react-carousel.es.css";
import { ParsedUrlQuery } from "querystring";

import { getPrismicClient } from "../../services/prismic";
import formatMoney from "../../utils/formatMoney";
import FreeProductAccordion from "../../components/FreeProductAccordion";
import PaymentButton from "../../components/PaymentButton";

interface Params extends ParsedUrlQuery {
  slug: string;
}
interface ImageData {
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
  images: ImageData[];
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
        </Container>{" "}
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
            <PaymentButton product={product} />
          ) : (
            <FreeProductAccordion product={product} />
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
  const images = Object.values(response.data.imagens[0]) as ImageData[];
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

  return {
    props: {
      product,
    },
  };
};
