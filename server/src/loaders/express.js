const express = require('express');
const path = require('path');
const servers = require('../routes/servers');
const PORT = process.env.PORT || 8000;

const init = (app) => {
  const clientPath = '../../../client/build';

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, clientPath)));
  app.use(express.static('public'));
  app.use('/api/servers', servers);
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, clientPath, 'index.html'));
  });
  app.listen(PORT, () => {
    console.debug(`Listening on port ${PORT}...`);
  });
};

module.exports = init;
