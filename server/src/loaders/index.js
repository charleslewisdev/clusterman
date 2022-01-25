const express = require('express');
const initDatabase = require('./db');
const initExpress = require('./express');

const init = () => {
  try {
    console.log('Begin application startup');
    const app = express();
    initDatabase();
    initExpress(app);
  } catch (err) {
    console.log('Application startup failed');
    console.error(err);
  }
};

module.exports = init;
