import React from 'react';

import { initialState } from './state';

const ActionContext = React.createContext<ActionsContext>([initialState, () => {}]);

export const ActionProvider = (props: React.PropsWithChildren) => {
  const state = React.useState(initialState);
  return <ActionContext.Provider value={state}>{props.children}</ActionContext.Provider>;
};

export default () => {
  return React.useContext(ActionContext);
};
