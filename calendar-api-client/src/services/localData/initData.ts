import { UserTestData } from '../../data/user';

export const initLocalData = (config: ClientConfig) => () => {
  const { onReading, onSaving } = config.localStorage;
  const localData = onReading();

  if (localData.lastUpdate) return;

  onSaving({ lastUpdate: new Date().toISOString(), user: UserTestData });
};
