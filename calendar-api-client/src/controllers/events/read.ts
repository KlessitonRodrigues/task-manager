export const readEvents = (config: ClientConfig) => () => {
  const { onReading } = config.localStorage;

  const localData = onReading();
  return localData.user.events;
};
