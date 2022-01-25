const {createServerContainer} = require('./containers');
const getDocker = require('../singletons/docker');
const {
  createContainer,
  inspectContainer,
  startContainer,
  stopContainer,
} = require('../utils/dockerEntities');
const {translateRequestBodyToContainerOptions} = require('../utils/requests');
const {successResponse} = require('../utils/responseTypes');
const {summarizeServerContainers} = require('../utils/servers');
const {imageName} = require('../constants');
const Server = require('../models/Server');

const createServer = async (reqBody) => {
  const newServer = await Server.create(reqBody);
  return await createServerContainer(reqBody);
  // TODO
  // create database object
  // create container
  // start job to keep checking container status
  // once container is stable (rcon is reporting ready/connected), copy over ini files and restart
};

const listServers = () => {
  return Server.find();
};

module.exports = {
  createServer,
  listServers,
};
