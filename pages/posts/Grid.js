import { Grid, GridItem, Box, Image } from "@chakra-ui/react";
export default function GridImage() {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={6}
      height="auto"
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
    </Grid>
  );
}
