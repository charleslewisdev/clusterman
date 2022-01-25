import {fetchWrapper} from '../utils/fetchWrapper';

export const addServer = (options) => {
  return fetchWrapper('POST', '/api/servers/createServer', options);
};

export const getServerList = () => {
  return fetchWrapper('/api/servers/listServers');
};

export const restartServer = (id) => {
  return fetchWrapper('POST', '/api/servers/restartServer', {id});
};

export const startServer = (id) => {
  return fetchWrapper('POST', '/api/servers/startServer', {id});
};

export const stopServer = (id) => {
  return fetchWrapper('POST', '/api/servers/stopServer', {id});
};
