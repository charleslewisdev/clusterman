import React, {createContext, useContext, useReducer} from 'react';
import {initialState, reducer} from '../reducers/Login';

const DispatchContext = createContext();
const StateContext = createContext();

const LoginProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useLoginDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useLoginDispatch must be used within a LoginProvider');
  }
  return context;
};

const useLoginState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useLoginState must be used within a LoginProvider');
  }
  return context;
};

export {LoginProvider, useLoginDispatch, useLoginState};
