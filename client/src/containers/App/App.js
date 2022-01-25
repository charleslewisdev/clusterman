import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import ProvidersWrapper from '../ProvidersWrapper';
import DynamicConfig from '../../components/DynamicConfig/DynamicConfig';
import Servers from '../../components/Servers';
import Layout from '../Layout';

const App = () => {
  return (
    <div className="App">
      <ProvidersWrapper>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Servers />} />
            <Route path="dynamic-config" element={<DynamicConfig />} />
            <Route path="servers" element={<Servers />} />
          </Route>
        </Routes>
      </ProvidersWrapper>
    </div>
  );
};

export default App;
