const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serverSchema = new Schema(
  {
    dockerContainerId: String,
    name: String,
    map: String,
    clusterID: String,
    numPlayersConnected: Number,
    numPlayersMax: Number,
    serverPassword: String,
    serverAdminPassword: String,
    dynamicConfigUrl: String,
    gameParams: String,
    portGame: Number,
    portRcon: Number,
    portSteamQuery: Number,
    rconStatus: String,
    rconStatusSince: Date,
    dockerStatus: String,
    dockerStatusSince: Date,
    dataDir: String,
  },
  {timestamps: true}
);

const Server = mongoose.model('Server', serverSchema);

module.exports = Server;
