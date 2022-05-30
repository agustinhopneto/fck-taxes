export function mapToArray(values: string) {
  const valuesArray = values
    .trim()
    .split(',')
    .map((value) => Number(value));

  return valuesArray;
}

export function fixFloatValue(value: number): number {
  const fixedValue = Math.round(value * 100) / 100;

  return fixedValue;
}

export function fixPercent(value: number): number {
  const fixedValue = Math.round(value * 100);

  return fixedValue;
}
