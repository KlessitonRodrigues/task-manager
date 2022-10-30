import { LocalStorage } from 'src/@types/localStorage';

const storageName = 'TASKMANAGER_APP';

export const getLocalStorage = (): LocalStorage => {
  const data = JSON.parse(localStorage.getItem(storageName) || '{}');
  return data;
};

export const setLocalStorage = (data: LocalStorage) => {
  data.modified_at = new Date().toISOString();
  localStorage.setItem(storageName, JSON.stringify(data));
  return JSON.parse(localStorage.getItem(storageName) || '');
};
