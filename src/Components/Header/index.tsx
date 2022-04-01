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
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";

import { Link as LinkScroll, animateScroll } from "react-scroll";

const Links = [
  { name: "Áreas de Atuação", url: "areas", offSet: -500 },
  { name: "Sobre", url: "sobre", offSet: -300 },
  { name: "Contato", url: "contato", offSet: 0 },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box backgroundColor="#262626" position="sticky" top="0" zIndex="1">
        <Flex h={100} alignItems={"center"} px="15px">
          <HStack
            alignItems={"center"}
            m="auto"
            gap={{ base: "none", md: "8vw", lg: "27vw" }}
          >
            <Link>
              <Image
                src="./logo.png"
                alt="Jessica Veroneze"
                w="283px"
                onClick={() => {
                  animateScroll.scrollToTop();
                }}
              />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color="#D6AFA8"
            >
              <Link
                px={2}
                py={1}
                onClick={() => {
                  animateScroll.scrollToTop();
                }}
              >
                Início
              </Link>
              {Links.map((link) => (
                <Flex
                  key={link.name}
                  px={2}
                  py={1}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  <LinkScroll to={link.url} smooth={true} duration={1000}>
                    {link.name}
                  </LinkScroll>
                </Flex>
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
              <Link
                px={2}
                py={1}
                onClick={() => {
                  animateScroll.scrollToTop();
                  onClose();
                }}
              >
                Início
              </Link>
              {Links.map((link) => (
                <Flex
                  key={link.name}
                  px={2}
                  py={1}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  <LinkScroll
                    to={link.url}
                    smooth={true}
                    duration={1000}
                    offset={link.offSet}
                    onClick={onClose}
                  >
                    {link.name}
                  </LinkScroll>
                </Flex>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
