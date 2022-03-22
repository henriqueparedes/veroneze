import { Box, Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex backgroundColor="#262626" justifyContent="center">
      <Flex w="1080px" h="99.5" alignItems="center">
        <Image src="./logo.png" alt="Jessica Veroneze" w="283.5" h="69.5" />
      </Flex>
    </Flex>
  );
}
