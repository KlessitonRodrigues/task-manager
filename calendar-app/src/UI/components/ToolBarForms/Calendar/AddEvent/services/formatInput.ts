import dayjs from 'dayjs';

export const DateInputToUnix = (dateStr: string, join?: string) => {
  // dateInput: 2023-02-28
  const [yyyy, mm, dd] = dateStr.split('-');
  return new Date(`${mm}/${dd}/${yyyy}`).getTime();
};

export const unixToDateInput = (unix: number) => {
  return dayjs(unix).format('YYYY-MM-DD');
};

export const timeInputToUnix = (timeStr: string, join?: string) => {
  const newDate = dayjs();
  return dayjs(timeStr).unix();
};
