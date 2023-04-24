export const readEvents = (config: ClientConfig, newEv: UserEvent) => {
  const localData = config.localStorage.onReading();
  return localData.user.events;
};
