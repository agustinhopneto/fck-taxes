import { FiPlusCircle, FiMinusCircle, FiCheckCircle } from 'react-icons/fi';

import { Box, Flex, Icon, Text } from '@chakra-ui/react';

type CardProps = {
  iconType: 'positive' | 'negative' | 'check';
  colorType: 'positive' | 'negative' | 'neutral';
  title: string;
  value: number;
};

const iconController = {
  positive: FiPlusCircle,
  negative: FiMinusCircle,
  check: FiCheckCircle,
};

const colorController = {
  positive: 'green.500',
  negative: 'red.500',
  neutral: 'yellow.500',
};

export function Card({ iconType, colorType, title, value }: CardProps) {
  return (
    <Box
      bg="gray.800"
      p={5}
      rounded="md"
      borderColor="gray.700"
      borderWidth="1px"
      maxW="380px"
    >
      <Flex justify="space-between" align="center">
        <Text color="gray.400">{title}</Text>
        <Icon
          as={iconController[iconType]}
          fontSize="20px"
          color={colorController[colorType]}
        />
      </Flex>
      <Text fontWeight="medium" fontSize="2xl">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value)}
      </Text>
    </Box>
  );
}
