import { Box, Heading as ChakraHeading, Text } from '@chakra-ui/react';

type HeadingProps = {
  title: string;
  subtitle?: string;
};

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <Box mb={4}>
      <ChakraHeading fontSize="3xl">{title}</ChakraHeading>
      {subtitle && <Text color="gray.300">{subtitle}</Text>}
    </Box>
  );
}
