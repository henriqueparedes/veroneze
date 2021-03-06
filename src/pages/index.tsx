import { Flex } from "@chakra-ui/react";
import SendYourCase from "../Components/SendYourCase";
import ActingAreas from "../Components/ActingAreas";
import AboutMe from "../Components/AboutMe";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import WhatsApp from "../Components/WhatsApp";

export default function Home() {
  return (
    <Flex direction="column">
      <SendYourCase />
      <ActingAreas />
      <AboutMe />
      <Contact />
      <WhatsApp />
      <Footer />
    </Flex>
  );
}
