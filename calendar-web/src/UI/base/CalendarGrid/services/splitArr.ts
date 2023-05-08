export const splitArr = <T>(arr: T[], length: number) => {
  const splitedArr: typeof arr[] = [];

  arr.forEach((item, i) => {
    const splitIndex = Math.floor(i / length);
    const itemIndex = Math.floor(i % length);
    splitedArr[splitIndex]
      ? (splitedArr[splitIndex][itemIndex] = item)
      : (splitedArr[splitIndex] = [item]);
  });

  return splitedArr;
};
