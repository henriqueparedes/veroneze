import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex backgroundColor="#262626" justifyContent="center">
      <Flex w="1080px" h="99.5" alignItems="center" p="10px">
        <Image src="./logo.png" alt="Jessica Veroneze" w="283.5" h="69.5" />
        <HStack color="#D6AFA8" ml="auto" gap="15px">
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
