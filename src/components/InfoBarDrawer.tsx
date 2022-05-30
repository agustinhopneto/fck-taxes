import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';

import { fixedValuesConfig } from '../config';
import { fixPercent } from '../utils/helpers';
import { InfoCard } from './InfoCard';
import { RatesTable } from './RatesTables';
import { Section } from './Section';

type InfoBarDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function InfoBarDrawer({ isOpen, onClose }: InfoBarDrawerProps) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="gray.800">
        <DrawerCloseButton color="red.500" />

        <DrawerBody mt={4}>
          <Section title="Como é feito o cáculo?">
            <Text>
              Essa aplicação calcula os impostos para quem é Micro
              Empreendedor(ME) levando em consideração que é feita a declaração
              de
              {fixPercent(fixedValuesConfig.prolaboreRate)}% como pró-labore
              sobre o faturamento total mensal.
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
