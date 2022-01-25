import React from 'react';
import {BrowserRouter} from 'react-router-dom';

const ProvidersWrapper = ({children}) => {
  return (
    <>
      <BrowserRouter>{children}</BrowserRouter>
    </>
  );
};

export default ProvidersWrapper;
