import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Form from "../Form";

export default function SendYourCase() {
  return (
    <Flex
      backgroundColor="#2e2e2e"
      direction={{ base: "column", md: "row" }}
      zIndex="0"
    >
      <Image
        src="./imagem-contrato.jpg"
        alt="imagem-de-contrato"
        width={{ base: "auto", md: "60vw" }}
        h={{ base: "240px", md: "620px" }}
        objectFit="cover"
      />
      <Box
        h={{ base: "auto", md: "620px" }}
        w={{ base: "auto", md: "40vw" }}
        justifyContent="center"
        color="#D6AFA8"
        p="50px 50px"
      >
        <Text fontSize="34px" fontWeight="bold">
          Mande o seu caso
        </Text>
        <Text fontSize="20px" mt="25px">
          Preencha o formulário
        </Text>
        <Form />
      </Box>
    </Flex>
  );
}
