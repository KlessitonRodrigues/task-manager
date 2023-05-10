export const readEvents = (config: ClientConfig) => (args?: ReadEventsArgs) => {
  const localData = config.local.read();
  return localData.user?.events || [];
};
