//const {Rcon} = require('rcon-client');

const translateGameParamStringToObject = (paramStr) => {
  console.log(paramStr);
  const [map, _, ...arr] = paramStr.split('?');
  const gameParamsObj = translateKVArrayToObject(arr);
  return {
    ...gameParamsObj,
    map,
  };
};

const translateKVStringToPair = (str) => {
  const splitPosition = str.indexOf('=');
  if (splitPosition < 0) return [str, str];
  const key = str.slice(0, splitPosition);
  const value = str.slice(splitPosition + 1);
  return [key, value];
};

const translateKVArrayToObject = (arr) => {
  return arr.reduce((acc, envVar) => {
    const [key, value] = translateKVStringToPair(envVar);
    acc[key] = value;
    return acc;
  }, {});
};

const summarizeServerContainers = (serverContainers) => {
  return serverContainers.map((server) => {
    const {Config, HostConfig, Id, Name, State} = server;
    console.log(Config);
    const envVars = translateKVArrayToObject(Config.Env);
    console.log(envVars);
    const gameParams = translateGameParamStringToObject(envVars.GAME_PARAMS);
    const {RCONPort} = gameParams;
    console.log('rcon port', RCONPort);
    /*
    const rcon = new Rcon({
      host: '127.0.0.1',
      port: RCONPort,
      password: '4S&7YA',
    });

    let rconStatus = 'OK';
    try {
      await rcon.connect();
    } catch (err) {
      rconStatus = 'OFFLINE';
    }
    await rcon.end();
    */
    return {
      id: Id,
      envVars,
      gameParams,
      map: gameParams.map,
      name: Name.slice(1),
      ports: Object.keys(HostConfig.PortBindings),
      rconStatus,
      state: State,
    };
  });
};

module.exports = {
  summarizeServerContainers,
};
