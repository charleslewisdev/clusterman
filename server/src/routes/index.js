const express = require('express');
const path = require('path');
const servers = require('../routes/servers');
const PORT = process.env.PORT || 8000;

const init = (app) => {
  app.use(express.static(path.resolve(__dirname, '../../client/build')));
  app.use('/api/servers', servers);
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  });
  app.listen(PORT, () => {
    console.debug(`Listening on port ${PORT}...`);
  });
};

module.exports = init;
