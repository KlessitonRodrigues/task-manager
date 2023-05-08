export const readEvents = (config: ClientConfig) => (args?: ReadEventsArgs) => {
  const localData = config.local.read();
  if (args?.month) return readEventsByMonth(localData, args);
  return localData.user.events;
};

const readEventsByMonth = (localData: LocalDataBase, args: ReadEventsArgs) => {
  return localData.user.events;
};
