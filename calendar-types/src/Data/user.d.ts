type UserInformation = {
  name: string;
  lastName: string;
  email: string;
};

type UserSettings = {
  themeMode: string;
  themeColor: string;
  syncData: boolean;
};

type User = {
  information: UserInformation;
  settings: UserSettings;
  events: UserEvent[];
};
