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

const createServerContainer = async (reqBody) => {
  const options = translateRequestBodyToContainerOptions(reqBody);

  try {
    console.log('Creating container');
    const container = await createContainer(options);
    console.log('Container created');
    console.log('Attaching some streamy goodness');
    const stream = await container.attach({
      stream: true,
      stdout: true,
      stderr: true,
    });
    stream.pipe(process.stdout);
    console.log('Starting container');
    await container.start();
    return successResponse('Success', {container});
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const listServers = async () => {
  const docker = getDocker();
  const containers = await docker.listContainers({all: true});
  const serverContainers = containers.filter(({Image}) => Image === imageName);
  const servers = await Promise.all(
    serverContainers.map(({Id}) => inspectContainer(Id))
  );
  const serverList = summarizeServerContainers(servers);
  return serverList;
};

const restartServer = async ({id}) => {
  await stopContainer(id);
  return startContainer(id);
};

const startServer = async ({id}) => {
  return startContainer(id);
};

const stopServer = async ({id}) => {
  return stopContainer(id);
};

module.exports = {
  createServerContainer,
  listServers,
  restartServer,
  startServer,
  stopServer,
};
