import React from 'react';

import { initialGlobalState } from './state';

const globalContext = React.createContext<GlobalContext>([initialGlobalState, () => {}]);

export const GlobalProvider = (props: React.PropsWithChildren) => {
  const state = React.useState(initialGlobalState);
  return <globalContext.Provider value={state}>{props.children}</globalContext.Provider>;
};

export default () => {
  return React.useContext(globalContext);
};
