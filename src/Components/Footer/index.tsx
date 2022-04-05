import { Flex, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      direction="column"
      backgroundColor="#262626"
      h="50px"
      mt="20px"
      alignItems={"center"}
      justifyContent="center"
    >
      <Link
        href="https://www.linkedin.com/in/henrique-machado-paredes-749117118/"
        color="#D6AFA8"
        isExternal
        fontSize={{ base: "13px", md: "16px" }}
      >
        © 2022 Copyright - Desenvolvido por Henrique Paredes
      </Link>
    </Flex>
  );
}
