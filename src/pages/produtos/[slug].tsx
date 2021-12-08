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
  stripeUrl: string;
  qrCode?: { imageUrl?: string; code?: string };
  productLink?: string;
  slug: string;
  updatedAt: string;
  images: Image[];
}

interface SingleProductPageProps {
  product: Product;
}

export default function SingleProductPage({ product }: SingleProductPageProps) {
  const [showQRCode, setShowQRCode] = useState(false);

  const { hasCopied, onCopy } = useClipboard(product.qrCode?.code);

  return (
    <Box maxW={["100vw", "90vw", "90vw", "70vw"]} mx="auto" mt="20px">
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
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          {product.price > 0 ? (
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
                      <Box flex="1" textAlign="center" fontWeight="bold">
                        COMPRAR VIA PIX - 5% de desconto
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      De:{" "}
                      <Text as="span" textDecor="line-through">
                        {formatMoney(product.price)}
                      </Text>
                    </Text>
                    <Text>
                      por:{" "}
                      <Text as="span" fontWeight="bold">
                        {formatMoney(product.price * 0.95)}
                      </Text>
                      <Text mt="20px" textAlign="justify">
                        No momento, estamos enviando manualmente o e-book por
                        e-mail. Logo, solicitamos o envio do comprovante de
                        pagamento para o endereço de e-mail{" "}
                        <Text as="span" fontWeight="bold">
                          contato@liamotta.com
                        </Text>
                        .
                      </Text>
                      <FormControl display="flex" alignItems="center" mt="10px">
                        <FormLabel htmlFor="mail-condition" mb="0">
                          <Text fontWeight="bold">
                            Concordo com as condições acima:
                          </Text>
                        </FormLabel>
                        <Switch
                          id="mail-condition"
                          colorMode="light"
                          onChange={(e) => setShowQRCode(e.target.checked)}
                        />
                      </FormControl>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              {showQRCode && product.qrCode ? (
                <Box>
                  <Image
                    src={product.qrCode.imageUrl}
                    alt={product.qrCode.code}
                    mx="auto"
                    w="320px"
                  />
                  <InputGroup w="320px" mx="auto">
                    <InputLeftElement pointerEvents="none">
                      <Icon as={RiQrCodeFill} color="gray.900" />
                    </InputLeftElement>
                    <Input
                      borderColor="gray.900"
                      _focus={{
                        outline: "none",
                        backgroundColor: "gray.100",
                      }}
                      _hover={{ backgroundColor: "gray.100" }}
                      value={product.qrCode.code}
                      isTruncated
                      borderTopRightRadius="0"
                      borderBottomRightRadius="0"
                      borderRight="none"
                    />
                    <Button
                      onClick={onCopy}
                      color="white"
                      bgColor="gray.900"
                      _hover={{
                        bgColor: "gray.700",
                      }}
                      _focus={{ outline: "none" }}
                      borderTopLeftRadius="0"
                      borderBottomLeftRadius="0"
                    >
                      {hasCopied ? (
                        <Icon as={RiCheckLine} color="white" />
                      ) : (
                        <Icon as={RiFileCopyLine} color="white" />
                      )}
                    </Button>
                  </InputGroup>
                </Box>
              ) : (
                ""
              )}
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
  console.log(response.data);
  let product: Product = {
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
