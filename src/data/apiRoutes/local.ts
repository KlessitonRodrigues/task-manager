const storageName = 'TODO_APP';

const getLocalStorage = (): LocalStorage => {
  const storage = JSON.parse(localStorage.getItem(storageName) || '{}') as LocalStorage;
  if (!storage.updateAt) storage.data = { events: [], eventsDate: [] };
  return storage;
};

const setLocalStorage = (data: LocalStorage['data']) => {
  localStorage.setItem(storageName, JSON.stringify({ data, updateAt: Date.now() }));
  return data;
};

export const localAPI: APIRoutes = {
  'event/read': async () => {
    return { success: true, message: '', data: getLocalStorage()?.data?.events };
  },

  'event/update': async data => {
    const storage = getLocalStorage();
    storage?.data?.events?.some((event, i, arr) => {
      if (event.id !== data.id) return false;
      arr[i] = data;
      return true;
    });
    setLocalStorage(storage.data);
    return { success: true, message: 'user updated', data: true };
  },

  'event/create': async data => {
    const storage = getLocalStorage();
    storage?.data?.events?.push(data);
    setLocalStorage(storage.data);
    return { success: true, message: 'user created', data: true };
  },

  'event/delete': async data => {
    const storage = getLocalStorage();
    storage?.data?.events?.some((event, i, arr) => {
      if (event.id !== data.id) return false;
      arr.splice(i, 1);
      return true;
    });
    setLocalStorage(storage.data);
    return { success: true, message: 'user updated', data: true };
  },

  'event-date/read': async (from, to) => {
    const storage = getLocalStorage();
    const dates = storage?.data?.eventsDate?.filter(evDate => {
      if (evDate.dateTime > from && evDate.dateTime < to) return true;
      return false;
    });
    const events = storage?.data?.events?.filter(event =>
      dates.some(evDate => evDate.eventId === event.id)
    );
    return { success: true, message: '', data: { events, dates } };
  },

  'event-date/update': async data => {
    const storage = getLocalStorage();
    storage?.data?.events?.some((event, i, arr) => {
      if (event.id !== data.id) return false;
      arr[i] = data;
      return true;
    });
    setLocalStorage(storage.data);
    return { success: true, message: 'user updated', data: true };
  },

  'event-date/create': async data => {
    const storage = getLocalStorage();

    if (storage?.data?.eventsDate?.length)
      storage.data.eventsDate = [...data, ...storage?.data?.eventsDate];
    else storage.data.eventsDate = data;

    setLocalStorage(storage.data);
    return { success: true, message: 'user created', data: true };
  },

  'event-date/delete': async data => {
    const storage = getLocalStorage();
    storage?.data?.events?.some((event, i, arr) => {
      if (event.id !== data.id) return false;
      arr.splice(i, 1);
      return true;
    });
    setLocalStorage(storage.data);
    return { success: true, message: 'user updated', data: true };
  },
};
