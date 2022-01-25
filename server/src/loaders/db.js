const mongoose = require('mongoose');

const attachDatabaseEventHandlers = () => {
  mongoose.connection.on('error', (err) => {
    console.error(err);
  });
  mongoose.connection.on('open', function () {
    console.log('Database connection established successfully');
  });
};

const init = async () => {
  console.log('Initializing database connection');
  attachDatabaseEventHandlers();
  await mongoose.connect('mongodb://localhost:27017/clusterman');
};

module.exports = init;
