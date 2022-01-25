require('dotenv').config();
const loaders = require('./loaders');

const startServer = async () => {
  await loaders();
};

startServer();
