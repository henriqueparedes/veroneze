import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Icon from "../Components/Icon";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const data = { name, email, telefone, mensagem };

    fetch("http://localhost:3000/dev/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((resposta) => {
      if (resposta.ok) {
        setName("");
        setEmail("");
        setTelefone("");
        setMensagem("");
        alert(
          `Obrigado por enviar sua mensagem ${name}! Em breve entraremos em contato com você.`
        );
      }
    });
  };

  return (
    <Box>
      <Flex backgroundColor="#2e2e2e" direction={{ base: "column", md: "row" }}>
        <Image
          src="./imagem-contrato.jpg"
          alt="imagem-de-contrato"
          width={{ base: "auto", md: "60vw" }}
          h={{ base: "130px", md: "620px" }}
          objectFit="cover"
        />
        <Box
          width={{ base: "auto", md: "40vw" }}
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
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="name">
              <Input
                placeholder="Nome"
                id="name"
                mt="20px"
                borderColor="#D6AFA8"
                _placeholder={{ color: "#D6AFA8" }}
                focusBorderColor="#D6AFA8"
                onChange={(event) => setName(event.currentTarget.value)}
                value={name}
              />
            </FormLabel>
            <FormLabel htmlFor="email">
              <Input
                placeholder="E-mail"
                id="email"
                type="email"
                borderColor="#D6AFA8"
                _placeholder={{ color: "#D6AFA8" }}
                focusBorderColor="#D6AFA8"
                onChange={(event) => setEmail(event.currentTarget.value)}
                value={email}
              />
            </FormLabel>
            <FormLabel htmlFor="telefone">
              <Input
                placeholder="Telefone"
                id="telefone"
                borderColor="#D6AFA8"
                type="number"
                _placeholder={{ color: "#D6AFA8" }}
                focusBorderColor="#D6AFA8"
                onChange={(event) => setTelefone(event.currentTarget.value)}
                value={telefone}
              />
            </FormLabel>
            <FormLabel htmlFor="mensagem">
              <Textarea
                placeholder="Mensagem"
                id="mensagem"
                h="180px"
                borderColor="#D6AFA8"
                _placeholder={{ color: "#D6AFA8" }}
                focusBorderColor="#D6AFA8"
                onChange={(event) => setMensagem(event.currentTarget.value)}
                value={mensagem}
              />
            </FormLabel>
            <Button
              width="full"
              mt={4}
              type="submit"
              backgroundColor="#D6AFA8"
              color="#2e2e2e"
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Flex>
      <Flex
        w="100%"
        h="470px"
        justifyContent="center"
        alignItems="center"
        gap="9%"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Icon
          iconPath="./trabalho-ico.svg"
          iconAlt="ícone-direito-trabalho"
          text="Direito do Trabalho"
        />
        <Icon
          iconPath="./civil-ico.svg"
          iconAlt="ícone-direito-civil"
          text="Direito Civil"
        />
        <Icon
          iconPath="./familia-ico.svg"
          iconAlt="ícone-direito-familia"
          text="Direito de Família"
        />
        <Icon
          iconPath="./cart-ico.svg"
          iconAlt="ícone-direito-consumidor"
          text="Direito do Consumidor"
        />
      </Flex>
    </Box>
  );
}
