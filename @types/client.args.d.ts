type ClientConfig = {
  platform: 'web' | 'mobile';
  apiUrl: string;
  dataSync: boolean;
  local: {
    write: (data: LocalDataBase) => LocalDataBase;
    read: () => LocalDataBase;
  };
};
