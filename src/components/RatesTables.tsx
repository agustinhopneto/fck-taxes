import { Table, Tbody, Th, Thead, Tr, Td, Text } from '@chakra-ui/react';

import { fixedValuesConfig } from '../config';
import { fixFloatValue } from '../utils/helpers';

export function RatesTable() {
  return (
    <>
      <Text fontWeight="bold" mb={2}>
        Taxas INSS
      </Text>
      <Table>
        <Thead>
          <Tr>
            <Th borderColor="gray.700">Valores</Th>
            <Th borderColor="gray.700">Taxa</Th>
          </Tr>
        </Thead>
        <Tbody>
          {fixedValuesConfig.incomeTaxBaseValues.map((value, index) => (
            <Tr key={value}>
              <Td borderColor="gray.700">
                {value === Infinity
                  ? 'Demais valores'
                  : `Até ${new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(fixFloatValue(value))}`}
              </Td>
              <Td borderColor="gray.700">
                {fixFloatValue(fixedValuesConfig.incomeTaxAliquotsRates[index])}
                %
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
