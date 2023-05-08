export const splitWeeks = (days: DateInfo[], length: number) => {
  const weeks: (typeof days)[] = [];

  days.forEach((item, i) => {
    const weekIndex = Math.floor(i / length);
    const dayIndex = Math.floor(i % length);
    weeks[weekIndex] ? (weeks[weekIndex][dayIndex] = item) : (weeks[weekIndex] = [item]);
  });

  return weeks;
};
