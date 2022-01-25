import React, {createContext, useContext, useReducer} from 'react';
import {reducer} from '../reducers/Form';

const DispatchContext = createContext();
const StateContext = createContext();

const FormProvider = ({children, initialState}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useFormDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useFormDispatch must be used within a FormProvider');
  }
  return context;
};

const useFormState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useFormState must be used within a FormProvider');
  }
  return context;
};

export {FormProvider, useFormDispatch, useFormState};
