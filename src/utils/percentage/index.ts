export const calc = ({ value, total }: { value: number; total: number }) => {
  const result = value / total;

  if (isNaN(result)) {
    return 0;
  }

  return result * 100;
};

export const percentage = {
  calc,
};
