import apis from 'src/api/index';
import { TodoEvent, TodoEventGroup } from 'src/types/todoEvent';

export const handleDateInput = (value: string, currentDate: string) => {
  const [yy, mm, dd] = value.split('-');
  const date = new Date(currentDate);
  const valueDate = new Date(`${mm}-${dd}-${yy}`);

  date.setFullYear(valueDate.getFullYear(), valueDate.getMonth(), valueDate.getDate());

  return date.toISOString();
};

export const handleTimeInput = (value: string, currentDate: string) => {
  const [hh, mm] = value.split(':');
  const date = new Date(currentDate);

  date.setHours(+hh);
  date.setMinutes(+mm);

  return date.toISOString();
};

export const handleRepeatAt = (
  value: TodoEventGroup['repeatAt'][0],
  arr: TodoEventGroup['repeatAt']
) => {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
    return arr;
  }
  arr.push(value);
  return arr;
};

export const handleSaveFrom = (data: TodoEvent) => {
  return apis.localApi.todoAPI.CREATE(data);
};
