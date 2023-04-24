export const createEvent = (config: ClientConfig, newEv: UserEvent) => {
  const localData = config.localStorage.onReading();
  localData.user.events.push(newEv);
  config.localStorage.onSaving(localData);
  return localData.user.events;
};
