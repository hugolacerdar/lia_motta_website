import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { Grid, Flex, Icon } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard";
import formatMoney from "../../utils/formatMoney";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

interface Image {
  dimensions: { width: number; height: number };
  alt: string;
  url: string;
}
interface Product {
  title: string;
  price: number;
  slug: string;
  updatedAt: Date;
  images: Image[];
}
interface ProductsPageProps {
  products: Product[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return (
    <Box maxW={["100vw", "90vw", "90vw", "70vw"]} mx="auto" mt="20px">
      <Head>
        <title>Shop | Lia Motta</title>
      </Head>
      <Flex
        alignItems="center"
        color="gray.500"
        marginBottom="30px"
        ml={["10px", "10px", "10px", "0"]}
      >
        <Link href="/">Início</Link> <Icon as={RiArrowRightSLine} />{" "}
        <Link href="/produtos">Produtos</Link>
      </Flex>

      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]}
        gap={["20px", "30px", "100px"]}
        align="center"
        justify="center"
        px={["30px", "0"]}
        mt="50px"
      >
        {products.map((p) => (
          <ProductCard
            key={p.slug}
            title={p.title}
            price={p.price}
            images={p.images}
            slug={p.slug}
            updatedAt={p.updatedAt}
          />
        ))}
      </Grid>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "produto")],
    {
      fetch: ["produto.titulo", "produto.imagens", "produto.preco"],
      pageSize: 20,
    }
  );

  const products = response.results.map((p) => {
    return {
      slug: p.uid,
      title: p.data.titulo[0].text,
      price: formatMoney(p.data.preco),
      updatedAt: new Date(p.last_publication_date as string).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
      images: Object.values(p.data.imagens[0]),
    };
  });

  return {
    props: {
      products,
    },
  };
};
