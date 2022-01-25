const Docker = require('dockerode');

let docker = null;

const getDocker = () => {
  if (!docker) {
    docker = new Docker({socketPath: '/var/run/docker.sock'});
  }
  return docker;
};

module.exports = getDocker;
