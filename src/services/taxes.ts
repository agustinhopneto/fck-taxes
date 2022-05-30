import { fixedValuesConfig } from '../config';
import { fixFloatValue } from '../utils/helpers';

export type CalculateTaxesData = {
  baseValue: number;
  totalValue: number;
};

export type CalculatedTaxes = {
  prolaboreValue: number;
  inssValue: number;
  incomeTaxValue: number;
  firmTaxValue: number;
  totalTaxesValue: number;
  netValue: number;
  benefitsValue: number;
};

function calculateIncomeTax(netProlabore: number): number {
  const { incomeTaxBaseValues, incomeTaxAliquotsRates } = fixedValuesConfig;

  const baseValues = incomeTaxBaseValues.map((base, index, array) => {
    let minorBase = Math.min(netProlabore, base);

    if (index !== 0) {
      minorBase -= array[index - 1];
    }

    minorBase = Math.max(minorBase, 0);

    return minorBase;
  });

  const incomeTax = baseValues.reduce((acc, base, index) => {
    const baseTax = base * incomeTaxAliquotsRates[index];

    acc += baseTax;

    return acc;
  }, 0);

  return fixFloatValue(incomeTax);
}

export function calculateTaxes({
  baseValue,
  totalValue,
}: CalculateTaxesData): CalculatedTaxes {
  const { firmTaxRate, innsRate, prolaboreRate } = fixedValuesConfig;

  const prolaboreValue = fixFloatValue(totalValue * prolaboreRate);

  const inssValue = fixFloatValue(prolaboreValue * innsRate);
  const incomeTaxValue = calculateIncomeTax(prolaboreValue - inssValue);
  const firmTaxValue = fixFloatValue(totalValue * firmTaxRate);

  const totalTaxesValue = fixFloatValue(
    inssValue + incomeTaxValue + firmTaxValue
  );
  const netValue = fixFloatValue(baseValue - totalTaxesValue);
  const benefitsValue = fixFloatValue(totalValue - baseValue);

  return {
    prolaboreValue,
    inssValue,
    incomeTaxValue,
    firmTaxValue,
    totalTaxesValue,
    netValue,
    benefitsValue,
  };
}
