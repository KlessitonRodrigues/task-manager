export const createEvent = (config: ClientConfig) => (newEv: UserEvent) => {
  const { onReading, onSaving } = config.localStorage;
  const localData = onReading();

  localData.user.events.push(newEv);
  onSaving(localData);
  return localData.user.events;
};
