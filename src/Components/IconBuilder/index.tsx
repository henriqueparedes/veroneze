import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  text: string;
  iconPath: string;
  iconAlt: string;
  aditionalInfo?: string;
};

export default function Icon(props: Props) {
  const { text, iconPath, iconAlt, aditionalInfo } = props;

  return (
    <Box alignItems={"center"}>
      <Flex
        backgroundColor="#D6AFA8"
        w="110px"
        h="110px"
        borderRadius="50%"
        m="auto"
      >
        <Image src={iconPath} alt={iconAlt} h="55px" w="55px" m="auto" />
      </Flex>
      <Box>
        <Text m="25px" fontWeight="bold">
          {text}
        </Text>
      </Box>
      <Box>{aditionalInfo ? <Text m="40px">{aditionalInfo}</Text> : null}</Box>
    </Box>
  );
}
