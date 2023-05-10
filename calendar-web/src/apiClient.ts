import { apiClientInit } from 'src/@client/src';
import { storageHandlers } from 'src/utils/localStorage/handlers';

export const client = apiClientInit({
  platform: 'web',
  apiUrl: '',
  dataSync: false,
  local: storageHandlers('APP_DATA'),
});

client.database.initLocalData();
