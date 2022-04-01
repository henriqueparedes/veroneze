import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Icon from "../IconBuilder";

export default function AboutMe() {
  return (
    <Flex
      mt={{ base: "230px", md: "0" }}
      id="contato"
      h="470px"
      justifyContent="center"
      alignItems="center"
      gap="7%"
      direction={{ base: "column", md: "row" }}
    >
      <Icon iconPath="./email-ico.svg" iconAlt="contato-email" text="E-mail" />
      <Icon
        iconPath="./whatsapp-ico.svg"
        iconAlt="contato-whatsapp"
        text="Telefone e Whatsapp"
        aditionalInfo="51993787183"
      />
      <Icon
        iconPath="./instagram-ico.svg"
        iconAlt="contato-instagram"
        text="Instagram"
      />
      <Icon
        iconPath="./facebook-ico.svg"
        iconAlt="contato-facebook"
        text="Facebook"
      />
      <Icon
        iconPath="./linkedin-ico.svg"
        iconAlt="contato-linkedIn"
        text="Linkedin"
      />
    </Flex>
  );
}
