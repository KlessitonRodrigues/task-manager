import { initLocalData } from './localData/initData';

export const services = (config: ClientConfig) => ({
  localData: {
    initLocalData: initLocalData(config),
  },
});
