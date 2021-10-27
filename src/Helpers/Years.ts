export const getYears = (date: string): number => getDifferenceInYears(getDifferenceInMs(date))

const getDifferenceInYears = (ms: number): number => {
  const days = ms / 86400000;
  const years = (days - days / 365 / 4) / 365;
  return Math.ceil(years - 1);
}

const getDifferenceInMs = (date: string): number => {
  const birthDate = new Date(date).getTime();
  const now = new Date().getTime();
  return Math.abs(Number(birthDate) - Number(now));
}
