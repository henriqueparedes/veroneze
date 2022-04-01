import React, { useState } from "react";
import { Button, FormLabel, Input, Textarea } from "@chakra-ui/react";

export default function Form() {
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
    <form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name" id="form">
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
  );
}
