import { FiPercent } from 'react-icons/fi';

import { Flex, Text, Center, Icon } from '@chakra-ui/react';

type InfoCardProps = {
  title: string;
  value: string;
  colorType: 'negative' | 'positive' | 'neutral';
};

const colorController = {
  positive: 'green.900',
  negative: 'red.900',
  neutral: 'yellow.800',
};

export function InfoCard({ title, value, colorType }: InfoCardProps) {
  return (
    <Flex
      justify="space-between"
      borderBottom="1px"
      borderColor="gray.700"
      p={2}
      align="center"
    >
      <Flex flexDir="column">
        <Text color="gray.400">{title}</Text>
        <Text fontWeight="bold" fontSize="2xl">
          {value}
        </Text>
      </Flex>
      <Center bg={colorController[colorType]} p={2} rounded="md">
        <Icon as={FiPercent} fontSize="xl" />
      </Center>
    </Flex>
  );
}
