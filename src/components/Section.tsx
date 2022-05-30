import { ReactNode } from 'react';

import { Box, Text } from '@chakra-ui/react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <Box as="section" mb={6}>
      <Text mb={4} fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      {children}
    </Box>
  );
}
