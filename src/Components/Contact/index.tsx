import { Flex, Link, Box } from "@chakra-ui/react";
import Form from "../Form";
import Icon from "../IconBuilder";

export default function AboutMe() {
  return (
    <Flex direction="column">
      <Flex
        mt={{ base: "450px", md: "0" }}
        id="contato"
        h="470px"
        justifyContent="space-evenly"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Link href="mailto:jessica@veronezeadvocacia.com.br" isExternal>
          <Icon
            iconPath="./email-ico.svg"
            iconAlt="contato-email"
            text="E-mail"
            aditionalInfo="jessica@veronezeadvocacia.com.br"
          />
        </Link>
        <Link
          href="https://web.whatsapp.com/send?phone=5551992077176"
          isExternal
        >
          <Icon
            iconPath="./whatsapp-ico.svg"
            iconAlt="contato-whatsapp"
            text="Telefone e Whatsapp"
            aditionalInfo="(51) 99207-7176"
          />
        </Link>
        <Link href="https://www.instagram.com/veronezeadvocacia/" isExternal>
          <Icon
            iconPath="./instagram-ico.svg"
            iconAlt="contato-instagram"
            text="Instagram"
            aditionalInfo="@veronezeadvocacia"
          />
        </Link>
        <Link href="https://www.facebook.com/veronezeadvocacia" isExternal>
          <Icon
            iconPath="./facebook-ico.svg"
            iconAlt="contato-facebook"
            text="Facebook"
            aditionalInfo="/veronezeadvocacia"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/j%C3%A9ssicaveronezeduarte/"
          isExternal
        >
          <Icon
            iconPath="./linkedin-ico.svg"
            iconAlt="contato-linkedIn"
            text="Linkedin"
            aditionalInfo="/jéssicaveronezeduarte"
          />
        </Link>
      </Flex>
      <Box mt={{ base: "400px", md: "-80px" }} mx={{ base: "3vw", md: "8vw" }}>
        <Form />
      </Box>
    </Flex>
  );
}
