import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// const Links = ["Início", "Áreas de Atuação", "Sobre", "Contato"];
const Links = [
  { name: "Início", url: "/" },
  { name: "Áreas de Atuação", url: "#areas" },
  { name: "Sobre", url: "#sobre" },
  { name: "Contato", url: "teste4" },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box backgroundColor="#262626">
        <Flex h={100} alignItems={"center"} px="15px">
          <HStack
            alignItems={"center"}
            m="auto"
            gap={{ base: "none", md: "8vw", lg: "27vw" }}
          >
            <Link href="/">
              <Image
                src="./logo.png"
                alt="Jessica Veroneze"
                w="283px"
                h="70px"
              />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color="#D6AFA8"
            >
              {Links.map((link) => (
                <Link key={link.name} href={link.url} px={2} py={1}>
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              />
            </Menu>
          </Flex>
          <IconButton
            color="#D6AFA8"
            bg="#2e2e2e"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} color="#D6AFA8">
              {Links.map((link) => (
                <Link key={link.name} href={link.url} px={2} py={1}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
