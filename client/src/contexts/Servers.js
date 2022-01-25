import React, {createContext, useContext, useReducer} from 'react';
import {initialState, reducer} from '../reducers/Servers';

const DispatchContext = createContext();
const StateContext = createContext();

const ServersProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useServersDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useServersDispatch must be used within a ServersProvider');
  }
  return context;
};

const useServersState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useServersState must be used within a ServersProvider');
  }
  return context;
};

export {ServersProvider, useServersDispatch, useServersState};
