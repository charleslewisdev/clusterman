const service = require('../services/servers');
const {getRouteFromUrl} = require('../utils/requests');
const {badRequestResponse, errorResponse} = require('../utils/responseTypes');
const {reqHandler} = require('./requests');

const createServer = async (req, res) => {
  await reqHandler(service.createServer)(req, res);
};

const listServers = async (req, res) => {
  await reqHandler(service.listServers)(req, res);
};

const restartServer = async (req, res) => {
  await reqHandler(service.restartServer)(req, res);
};

const startServer = async (req, res) => {
  await reqHandler(service.startServer)(req, res);
};

const stopServer = async (req, res) => {
  await reqHandler(service.stopServer)(req, res);
};

const validatorMiddleware = ({body, originalUrl}, res, next) => {
  const methodName = getRouteFromUrl(originalUrl);

  const {id, name} = body;

  switch (methodName) {
    case 'createServer':
      if (!name) {
        return res.status(400).json(badRequestResponse('"name" is required'));
      }
      break;
    case 'restartServer':
    case 'startServer':
    case 'stopServer':
      if (!id) {
        return res.status(400).json(badRequestResponse('"id" is required'));
      }
      break;
    case 'listServers':
      break;
    default:
      return res.status(500).json(errorResponse('Unexpected methodName'));
  }
  next();
};

module.exports = {
  createServer,
  listServers,
  restartServer,
  startServer,
  stopServer,
  validatorMiddleware,
};
