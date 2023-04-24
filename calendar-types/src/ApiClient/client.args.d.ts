type ClientConfig = {
  platform: 'web' | 'mobile';
  dataSync: false;
  localStorage: {
    onSaving: (data: LocalDataBase) => void;
    onReading: () => LocalDataBase;
  };
};
