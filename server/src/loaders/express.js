const routes = require('../routes');

const init = app => {
  app.use('/', routes);
};

module.exports = init;
