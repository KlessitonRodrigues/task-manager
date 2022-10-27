import apis from '@api/index';
import { LocalStorage } from 'src/@types/localStorage';
import { TaskEvent, TaskEventGroup } from 'src/@types/taskEvent';

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
  value: TaskEventGroup['repeatAt'][0],
  arr: TaskEventGroup['repeatAt']
) => {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
    return arr;
  }
  arr.push(value);
  return arr;
};

export const handleSaveFrom = (localData: LocalStorage, data: TaskEvent) => {
  return apis.localApi.tasks.create(localData, data);
};
