export const deleteEvent = (config: ClientConfig) => (event: UserEvent) => {
  const localData = config.local.read();

  const eventIndex = localData.user.events.findIndex(ev => ev.id === event.id);
  localData.user.events.splice(eventIndex, 1);

  config.local.write(localData);
  return localData.user.events;
};
