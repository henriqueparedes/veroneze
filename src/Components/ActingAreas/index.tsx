import { Flex } from "@chakra-ui/react";
import Icon from "../IconBuilder";

export default function ActingAreas() {
  return (
    <Flex
      mt={{ base: "230px", md: "0" }}
      id="areas"
      h="470px"
      justifyContent="center"
      alignItems="center"
      gap="9%"
      direction={{ base: "column", md: "row" }}
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
  );
}
