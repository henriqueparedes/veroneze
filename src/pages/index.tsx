import { Flex } from "@chakra-ui/react";
import SendYourCase from "../Components/SendYourCase";
import ActingAreas from "../Components/ActingAreas";
import AboutMe from "../Components/AboutMe";
import Contact from "../Components/Contact";

export default function Home() {
  return (
    <Flex direction="column">
      <SendYourCase />
      <ActingAreas />
      <AboutMe />
      <Contact />
    </Flex>
  );
}
