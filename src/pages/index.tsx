import { Box, HStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <HStack height="100vh" width="100%" spacing={0}>
      <Box w="420px" height="100vh" bg="gray.800">
        test
      </Box>
      <Box width="100%" height="100vh" bg="gray.900">
        test
      </Box>
      <Box width="560px" height="100vh" bg="gray.800">
        test
      </Box>
    </HStack>
  );
}
