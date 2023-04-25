import { controllers } from './controllers';
import { services } from './services';

export const apiClientInit = (config: ClientConfig) => ({
  controllers: controllers(config),
  services: services(config),
});
