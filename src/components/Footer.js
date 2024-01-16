import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};


export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
        <Text>© {getCurrentYear()} Joao Pedro Sousa. All rights reserved</Text>
      </Container>
    </Box>
  );
}
