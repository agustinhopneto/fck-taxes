import { mapToArray } from './utils/helpers';

export const fixedValuesConfig = {
  innsRate: +process.env.NEXT_PUBLIC_INSS_RATE,
  prolaboreRate: +process.env.NEXT_PUBLIC_PROLABORE_RATE,
  firmTaxRate: +process.env.NEXT_PUBLIC_FIRM_TAX_RATE,
  incomeTaxAliquotsRates: mapToArray(
    process.env.NEXT_PUBLIC_INCOME_TAX_ALIQUOTS_RATES
  ),
  incomeTaxBaseValues: mapToArray(
    process.env.NEXT_PUBLIC_INCOME_TAX_BASE_VALUES
  ),
};
