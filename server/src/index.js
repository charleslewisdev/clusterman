const express = require('express');
const loaders = require('./loaders');

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  const app = express();
  await loaders({app});
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
};

startServer();
