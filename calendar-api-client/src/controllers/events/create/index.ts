export const createEvent = (config: ClientConfig) => (newEv: UserEvent) => {
  const localData = config.local.read();

  localData.user.events.push(newEv);

  config.local.write(localData);
  return localData.user.events;
};
