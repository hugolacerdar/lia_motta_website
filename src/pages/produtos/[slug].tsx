import { Image } from "@chakra-ui/image";
import { Container, Flex, Icon } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

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
    <Container>
      <CarouselProvider
        naturalSlideWidth={320}
        naturalSlideHeight={400}
        totalSlides={3}
      >
        <Slider style={{ "max-height": "420px" }}>
          <Slide index={0}>
            <Image src={product.images[0].url} alt={product.slug} h={400} />
          </Slide>
          <Slide index={1}>
            <Image src={product.images[1].url} alt={product.slug} h={400} />
          </Slide>
          <Slide index={2}>
            <Image src={product.images[2].url} alt={product.slug} h={400} />
          </Slide>
        </Slider>
        <Flex justifyContent="center" width="320px">
          <ButtonBack>
            <Icon as={RiArrowLeftSLine} w={8} h={8} mr={10} />
          </ButtonBack>

          <ButtonNext>
            <Icon as={RiArrowRightSLine} w={8} h={8} ml={10} />
          </ButtonNext>
        </Flex>
      </CarouselProvider>
    </Container>
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
  const product = {
    slug,
    title: response.data.titulo[0].text,
    description: RichText.asHtml(response.data.descricao),
    price: response.data.preco,
    stringUrl: response.data.pagamento.url,
    updatedAt: new Date(
      response.last_publication_date as string
    ).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    images: Object.values(response.data.imagens[0]),
  };

  console.log(product);
  return {
    props: {
      product,
    },
  };
};
