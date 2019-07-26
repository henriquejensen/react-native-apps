const parseNumber = (number: string) => parseFloat(number).toLocaleString();
export const formatNumber = (number?: string) =>
  number ? parseNumber(number) : "";
