import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../Components/Header";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`nome ${name} email:${email} número${number} message ${message}`);
  };

  return (
    <Box>
      <Header />
      <Flex backgroundColor="#2e2e2e">
        <Image
          src="./imagem-contrato.jpg"
          alt="imagem-de-contrato"
          w="60%"
          h="620px"
        />
        <Box width="40%" justifyContent="center" color="#D6AFA8" p="80px 50px">
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
                onChange={(event) => setNumber(event.currentTarget.value)}
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
                onChange={(event) => setMessage(event.currentTarget.value)}
              />
            </FormLabel>
            <Button width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
