import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex backgroundColor="#262626" justifyContent="center">
      <Flex
        w={{ base: "auto", md: "1080px" }}
        h="99.5"
        alignItems="center"
        p="10px"
      >
        <Image src="./logo.png" alt="Jessica Veroneze" w="283.5px" h="69.5px" />
        <HStack
          color="#D6AFA8"
          ml="auto"
          gap="15px"
          direction={{ base: "column", md: "row" }}
        >
          <Link href="/">Início</Link>
          <Link>Áreas de Atuação</Link>
          <Link>Sobre</Link>
          <Link>Artigos</Link>
          <Link>Contato</Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
