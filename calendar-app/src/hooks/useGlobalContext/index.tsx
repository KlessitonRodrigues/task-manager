import React from 'react';

import { globalState } from './state';

type GlobalContext = [GlobalState, React.Dispatch<React.SetStateAction<GlobalState>>];

const globalContext = React.createContext<GlobalContext>([globalState, () => {}]);

export const GlobalProvider = (props: React.PropsWithChildren) => {
  const state = React.useState(globalState);
  return <globalContext.Provider value={state}>{props.children}</globalContext.Provider>;
};

export default () => {
  return React.useContext(globalContext);
};
