import Head from "next/head";
import { Box, Grid, Image, Text, Stack } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Box maxW={["100vw", "90vw", "90vw", "70vw"]} mx="auto" mt="20px">
      <Head>
        <title>Sobre | Lia Motta</title>
      </Head>
      <Grid gridTemplateColumns={["1fr", "1fr", "1fr", "1.5fr 2fr"]} gap="30px">
        <Image src="./bio.JPG" alt=""></Image>
        <Stack spacing="20px" mx={["20px", "0", "0", "0"]} textAlign="justify">
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            quam sequi vitae totam enim quidem voluptas ducimus voluptatem
            magnam harum, earum voluptate minima possimus magni id iure ipsa nam
            doloribus nihil consectetur ab maiores natus quisquam? Id, nihil
            suscipit illum eaque nisi blanditiis quae sequi, vero odio aut sint
            iure rem officia? Pariatur quaerat perspiciatis accusantium possimus
            laborum, fuga exercitationem! Odit fugit ad, quas et non voluptate
            qui, excepturi culpa maiores harum, tempora unde! Voluptatem placeat
            enim eius at odit cumque voluptatum neque nobis deserunt, dolorem
            nostrum officiis natus veniam ducimus praesentium sit repudiandae
            tempore dicta, error unde explicabo nemo rem! Saepe magni velit
            commodi voluptates veniam sed autem possimus modi dolores deserunt
            dolorum, recusandae iusto repellat blanditiis! Quibusdam accusantium
            ipsum suscipit vero! Distinctio eius deleniti a officia praesentium,
            aperiam minima libero?
          </Text>
          <Text>
            Animi, rem architecto earum eum possimus nihil quidem quam commodi.
            Voluptatum, dolorum. A neque ullam voluptates enim dolor vel? Id,
            saepe enim. Repellat, laborum. Neque facilis error recusandae a esse
            perspiciatis, quaerat aperiam rem ullam quas nam architecto quod
            quasi odio fugiat illum sed numquam nihil, nisi distinctio,
            consectetur pariatur sit magnam enim! Iste aspernatur consequuntur
            vel possimus eveniet, laborum molestias aut nam vero laudantium
            dicta fugit necessitatibus aliquam perferendis optio voluptatum,
            voluptatibus eaque velit illum repudiandae qui esse fuga rem eos?
            Quia veritatis ipsa quos odit minus! Voluptates laudantium
            distinctio quasi magni architecto praesentium, totam ducimus
            similique, optio ratione accusantium blanditiis maiores repellat
            delectus, quis officiis fuga ullam. Quod eaque dolor atque quam,
            perspiciatis necessitatibus soluta doloremque ipsa nesciunt
            praesentium aperiam assumenda quasi esse quo voluptate
            exercitationem, consequatur, corrupti iste. Fugit tenetur
            voluptatibus officia. Incidunt necessitatibus numquam voluptatibus
            natus nostrum alias totam, earum aperiam nobis, saepe eos animi,
            odio enim. Perferendis accusantium nobis aspernatur minima ipsum
            aperiam qui aliquid animi impedit ut, dolorem aliquam error saepe
            quas.
          </Text>
        </Stack>
      </Grid>
    </Box>
  );
}
