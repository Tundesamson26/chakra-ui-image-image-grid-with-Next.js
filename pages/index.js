import { SimpleGrid, Box, Image } from "@chakra-ui/react";

export default function Home() {
  return (
      <SimpleGrid
        minChildWidth="150px"
        spacing="40px"
        maxW="xl"
        alignItems="center"
        justifyContent="center"
        margin="100px auto"
      >
        <Box>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
        <Box>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
        <Box>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
        <Box>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
        <Box>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
        <Box>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
      </SimpleGrid>
  );
}
