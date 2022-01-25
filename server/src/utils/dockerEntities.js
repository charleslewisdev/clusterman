const getDocker = require('../singletons/docker');

const createContainer = async (containerOptions) => {
  let container;
  const docker = getDocker();

  try {
    // this only works if image already exists
    console.log('Checking to see if image already exists');
    container = await docker.createContainer(containerOptions);
    console.log('Image already exists');
  } catch (err) {
    // image doesn't exist yet
    if (err.statusCode === 404) {
      console.log('No image found. Download image');
      // create and download image
      await createImage(containerOptions.Image);
      console.log('Image created, trying again to create container');
      container = await docker.createContainer(containerOptions);
    } else {
      console.error(err);
      throw err;
    }
  }
  return container;
};

const createImage = async (fromImage) => {
  const docker = getDocker();
  const stream = await docker.createImage({
    fromImage,
  });
  stream.pipe(process.stdout);

  await new Promise((resolve, reject) => {
    docker.modem.followProgress(stream, (err, res) =>
      err ? reject(err) : resolve(res)
    );
  });
};

const inspectContainer = (id) => {
  const docker = getDocker();
  const container = docker.getContainer(id);
  return container.inspect();
};

const startContainer = (id) => {
  const docker = getDocker();
  const container = docker.getContainer(id);
  return container.start();
};

const stopContainer = (id) => {
  const docker = getDocker();
  const container = docker.getContainer(id);
  return container.stop();
};

module.exports = {
  createContainer,
  createImage,
  inspectContainer,
  startContainer,
  stopContainer,
};
