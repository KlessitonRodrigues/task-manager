export const updateEvent = (config: ClientConfig) => (event: UserEvent) => {
  const localData = config.local.read();

  const eventIndex = localData.user.events.findIndex(ev => ev.id === event.id);
  localData.user.events[eventIndex] = event;

  config.local.write(localData);
  return localData.user.events;
};
