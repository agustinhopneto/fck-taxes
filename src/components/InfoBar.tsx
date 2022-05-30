import { Box, Text } from '@chakra-ui/react';

import { fixedValuesConfig } from '../config';
import { fixPercent } from '../utils/helpers';
import { InfoCard } from './InfoCard';
import { RatesTable } from './RatesTables';
import { Section } from './Section';

export function InfoBar() {
  return (
    <Box
      as="aside"
      width="100%"
      minW="280px"
      maxW="420px"
      height="100%"
      bg="gray.800"
      borderLeft="1px"
      borderColor="gray.700"
      p={[6, 8]}
      overflowY="auto"
    >
      <Section title="Como é feito o cáculo?">
        <Text>
          Essa aplicação calcula os impostos para quem é Micro Empreendedor(ME)
          levando em consideração que é feita a declaração de
          {fixPercent(fixedValuesConfig.prolaboreRate)}% como pró-labore sobre o
          faturamento total mensal.
        </Text>
      </Section>
      <Section title="Taxas utilizadas">
        <Box mb={6}>
          <InfoCard
            colorType="neutral"
            title="Pró-labore"
            value={`${fixPercent(fixedValuesConfig.prolaboreRate)}%`}
          />
          <InfoCard
            colorType="negative"
            title="INSS"
            value={`${fixPercent(fixedValuesConfig.innsRate)}%`}
          />
          <InfoCard
            colorType="negative"
            title="Simples Nacional"
            value={`${fixPercent(fixedValuesConfig.firmTaxRate)}%`}
          />
        </Box>
        <RatesTable />
      </Section>
    </Box>
  );
}
