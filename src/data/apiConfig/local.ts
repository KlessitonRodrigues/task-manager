const storageName = 'TODO_APP';

const getLocalStorage = (): LocalStorage => JSON.parse(localStorage.getItem(storageName) || '{}');

const setLocalStorage = (data: LocalStorage['data']) => {
  localStorage.setItem(storageName, JSON.stringify({data, updateAt: Date.now()}));
  return data;
};

export const localAPI: APIRoutes = {
  'event/read': async () => {
    return { message: '', data: getLocalStorage()?.data?.events };
  },
  'event/update': async data => {
    const storage = getLocalStorage()
    setLocalStorage({...storage, data: {...storage.data, }})
    return { message: '', data:  };
  },
};
