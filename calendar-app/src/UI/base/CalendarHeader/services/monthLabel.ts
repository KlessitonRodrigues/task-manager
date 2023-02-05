export const formatMonthLabel = (date: string) => {
  return new Date(date).toLocaleDateString('en', { month: 'long', year: 'numeric' });
};
