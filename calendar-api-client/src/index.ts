import { database } from './controllers';

export const apiClientInit = (initApiClient: ClientConfig) => {
  console.log('initApiClient', initApiClient);

  return {
    database,
  };
};
