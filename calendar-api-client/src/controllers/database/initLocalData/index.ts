import { UserTestData } from '../../../data/user';

export const initLocalData = (config: ClientConfig) => () => {
  const localData = config.local.read();

  if (localData.lastUpdate) return;

  config.local.write({ lastUpdate: new Date().toISOString(), user: UserTestData });
};
