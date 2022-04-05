import { Image, Link } from "@chakra-ui/react";

export default function WhatsApp() {
  return (
    <Link href="https://web.whatsapp.com/send?phone=5551992077176" isExternal>
      <Image
        src="./iniciar-conversa-ico.svg"
        alt="iniciar-conversa-whatsApp"
        h={{ base: "70px", md: "100px" }}
        w={{ base: "70px", md: "100px" }}
        position="fixed"
        bottom="10px"
        left={{ base: "none", md: "5" }}
        right={{ base: "2", md: "none" }}
        zIndex="1"
        mb="15px"
      />
    </Link>
  );
}
