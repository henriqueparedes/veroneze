import { Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  text: string;
  iconPath: string;
  iconAlt: string;
  aditionalInfo?: string;
};

export default function Icon(props: Props) {
  const { text, iconPath, iconAlt, aditionalInfo } = props;

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      direction="column"
      my={{ base: "25px" }}
    >
      <Flex
        backgroundColor="#D6AFA8"
        w="110px"
        h="110px"
        borderRadius="50%"
        m="auto"
      >
        <Image src={iconPath} alt={iconAlt} h="55px" w="55px" m="auto" />
      </Flex>
      <Text m="20px" fontWeight="bold">
        {text}
      </Text>
      {aditionalInfo ? <Text m="10px">{aditionalInfo}</Text> : null}
    </Flex>
  );
}
