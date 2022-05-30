import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { InfoBar } from '../components/InfoBar';
import { InfoBarDrawer } from '../components/InfoBarDrawer';
import { Input } from '../components/Input';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/Section';
import {
  calculateTaxes,
  CalculatedTaxes,
  CalculateTaxesData,
} from '../services/taxes';

const calculateTaxesFormSchema = yup.object().shape({
  baseValue: yup.number().required('Valor base é obrigatório'),
  totalValue: yup.number().required('Valor base é obrigatório'),
});

export default function Home() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(calculateTaxesFormSchema),
  });

  const toast = useToast();

  const [taxValues, setTaxValues] = useState<CalculatedTaxes>(
    {} as CalculatedTaxes
  );

  const handleCalculateTaxes = useCallback<SubmitHandler<CalculateTaxesData>>(
    async ({ baseValue, totalValue }) => {
      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });

        if (totalValue < baseValue) {
          throw new Error('O valor total deve ser maior que o valor base!');
        }

        if (baseValue < 0 || totalValue < 0) {
          throw new Error('Os valores precisam ser positivos!');
        }

        const values = calculateTaxes({
          baseValue,
          totalValue,
        });

        setTaxValues(values);
      } catch (error) {
        toast({
          title: 'Algo errado ocorreu.',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      }
    },
    [toast]
  );

  return (
    <>
      <Navbar openDrawer={onOpen} isLargeScreen={isLargeScreen} />
      <HStack
        mx="auto"
        height="100%"
        width="100%"
        spacing={0}
        maxW="1366px"
        align="flex-start"
      >
        <Box
          p={[6, 8]}
          width="100%"
          height="100%"
          bg="gray.900"
          overflowY="scroll"
        >
          <Heading
            title="Calculadora de impostos PJ"
            subtitle="Se você tem ME, calcule agora seus impostos e fique triste! 😊"
          />
          <Divider borderColor="gray.700" maxW="50%" mb={10} />
          <Box
            as="form"
            bg="gray.800"
            p={5}
            rounded="md"
            mb={8}
            borderColor="gray.700"
            borderWidth="1px"
            onSubmit={handleSubmit(handleCalculateTaxes)}
          >
            <SimpleGrid minChildWidth={240} spacing={2} w="100%" mb={4}>
              <Input
                name="baseValue"
                label="Valor base"
                type="string"
                error={formState.errors.baseValue}
                {...register('baseValue')}
              />
              <Input
                name="totalValue"
                label="Valor total"
                type="string"
                error={formState.errors.totalValue}
                {...register('totalValue')}
              />
            </SimpleGrid>
            <Flex justify="flex-end">
              <Button
                isLoading={formState.isSubmitting}
                type="submit"
                ml="auto"
                colorScheme="green"
              >
                Ficar triste...
              </Button>
            </Flex>
          </Box>
          <Section title="Seus valores iniciais">
            <SimpleGrid minChildWidth={240} spacing={2} w="100%" mb={4}>
              <Card
                iconType="check"
                colorType="neutral"
                title="Pró-labore"
                value={taxValues.prolaboreValue || 0}
              />
            </SimpleGrid>
          </Section>
          <Section title="Impostos que não virarão nada">
            <SimpleGrid minChildWidth={240} spacing={2} w="100%" mb={4}>
              <Card
                iconType="negative"
                colorType="negative"
                title="INSS"
                value={taxValues.inssValue || 0}
              />
              <Card
                iconType="negative"
                colorType="negative"
                title="IRRF"
                value={taxValues.incomeTaxValue || 0}
              />
              <Card
                iconType="negative"
                colorType="negative"
                title="Simples Nacional"
                value={taxValues.firmTaxValue || 0}
              />
              <Card
                iconType="check"
                colorType="negative"
                title="Total de impostos"
                value={taxValues.totalTaxesValue || 0}
              />
            </SimpleGrid>
          </Section>
          <Section title="O que sobra pra você">
            <SimpleGrid minChildWidth={240} spacing={2} w="100%" mb={4}>
              <Card
                iconType="positive"
                colorType="positive"
                title="Valor líquido"
                value={taxValues.netValue || 0}
              />
              <Card
                iconType="positive"
                colorType="positive"
                title="Banefícios"
                value={taxValues.benefitsValue || 0}
              />
              <Card
                iconType="check"
                colorType="positive"
                title="Total líquido"
                value={taxValues.benefitsValue + taxValues.netValue || 0}
              />
            </SimpleGrid>
          </Section>
        </Box>
        {isLargeScreen ? (
          <InfoBar />
        ) : (
          <InfoBarDrawer isOpen={isOpen} onClose={onClose} />
        )}
      </HStack>
    </>
  );
}
