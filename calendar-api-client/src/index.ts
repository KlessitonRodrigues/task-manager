import { controllers } from './controllers';

export const apiClientInit = (config: ClientConfig) => {
  return controllers(config);
};
