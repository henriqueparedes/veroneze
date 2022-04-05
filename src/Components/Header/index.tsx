import {
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
  {
    name: "Áreas de Atuação",
    url: "areas",
    offSetCellPhone: -530,
    offSetDesktop: -100,
  },
  { name: "Sobre", url: "sobre", offSetCellPhone: -300, offSetDesktop: -100 },
  {
    name: "Contato",
    url: "contato",
    offSetCellPhone: -300,
    offSetDesktop: -100,
  },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction="column"
      backgroundColor="#262626"
      position="sticky"
      top="0"
      zIndex="1"
      boxShadow="0px 1px 5px black"
    >
      <Flex
        alignItems={"center"}
        justifyContent="center"
        h={100}
        mx={{ base: "15px", md: "0", lg: "0" }}
        gap={{ base: "12vw", md: "0", lg: "0" }}
      >
        <HStack
          alignItems={"center"}
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
                <LinkScroll
                  to={link.url}
                  smooth={true}
                  duration={1000}
                  offset={link.offSetDesktop}
                >
                  {link.name}
                </LinkScroll>
              </Flex>
            ))}
          </HStack>
        </HStack>
        <Flex>
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
          size={"lg"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen ? (
        <Flex
          pb={4}
          display={{ md: "none" }}
          direction="column"
          backgroundColor="#262626"
        >
          <Stack as={"nav"} spacing={4} color="#D6AFA8">
            <Link
              px={5}
              py={1}
              onClick={() => {
                animateScroll.scrollToTop();
                onClose();
              }}
              mt="10px"
            >
              Início
            </Link>
            {Links.map((link) => (
              <Flex
                key={link.name}
                px={5}
                py={1}
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                <LinkScroll
                  to={link.url}
                  smooth={true}
                  duration={1000}
                  offset={link.offSetCellPhone}
                  onClick={onClose}
                >
                  {link.name}
                </LinkScroll>
              </Flex>
            ))}
          </Stack>
        </Flex>
      ) : null}
    </Flex>
  );
}
