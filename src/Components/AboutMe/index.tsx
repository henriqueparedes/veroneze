import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      mt={{ base: "230px", md: "0" }}
    >
      <Image
        src="./imagem-sobre.jpg"
        alt="imagem-sobre-mim"
        width={{ base: "auto", md: "50vw" }}
        objectFit="cover"
      />
      <Box
        w={{ base: "auto", md: "50vw" }}
        justifyContent="center"
        color="#D6AFA8"
        p="50px 50px"
        backgroundColor="#2e2e2e"
      >
        <Box id="sobre">
          <Text fontSize="40px" fontWeight="bold" m="40px auto 15px auto">
            Sobre
          </Text>
          <Box w="170px" border="solid 3px" mb="70px" />
          <Text fontSize="22px" mt="25px">
            Advogada inscrita na OAB/RS n. 118.221. Bacharela em Direito pela
            UniRitter em 2018.
          </Text>
          <Text fontSize="22px" mt="25px">
            Pós-graduada pela FMP - Fundação Escola Superior do Ministério
            Público - Direito Social do Trabalho, Processo do Trabalho e da
            Seguridade Social em 2021.
          </Text>
          <Text fontSize="22px" mt="25px">
            Atuação nas áreas de direito do trabalho, direito civil, direito de
            família e direito do consumidor. Atuante na área trabalhista
            patronal desde 2018, no contencioso e no consultivo.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
