import { client } from 'src/apiClient';

export const getContent = (date: string) => {
  const days = client.calendar.monthDays({ monthDay: date });
  const gridData: CalendarGridProps['dates'] = [];
  console.log(days);

  days.forEach(day => gridData.push(day));

  return gridData;
};
