const {imageName} = require('../constants');

const getRouteFromUrl = (url) => {
  return url.substr(url.lastIndexOf('/') + 1);
};

const translateRequestBodyToContainerOptions = (reqBody) => {
  const {
    clusterID,
    dataDir,
    dynamicConfigUrl,
    gameParams,
    portGame,
    map,
    numPlayersMax,
    portRcon,
    name,
    serverAdminPassword,
    serverPassword,
    portSteamQuery,
  } = reqBody;
  const portGame2 = (parseInt(portGame) + 1).toString();

  return {
    Image: imageName,
    Env: [
      'GAME_ID=376030',
      `GAME_PARAMS=${map}?listen?SessionName=${clusterID}${portGame}?ServerPassword=${serverPassword}?ServerAdminPassword=${serverAdminPassword}?Port=${portGame}?QueryPort=${portSteamQuery}?MaxPlayers=${numPlayersMax}?RCONEnabled=True?RCONPort=${portRcon}?customdynamicconfigurl="${dynamicConfigUrl}" -server -automanagedmods -log -UseDynamicConfig -clusterid=${clusterID} -ClusterDirOverride=/serverdata/serverfiles/clusterfiles ${gameParams}`,
    ],
    HostConfig: {
      Binds: [
        `${dataDir}/steamcmd:/serverdata/steamcmd:rw`,
        `${dataDir}/ark-se:/serverdata/serverfiles:rw`,
        `${dataDir}/ark-se/${name}:/serverdata/serverfiles/ShooterGame/Saved:rw`,
        `${dataDir}/steamcmd/steamapps:/serverdata/Steam/steamapps:rw`,
        `${dataDir}/steamcmd/steamapps:/serverdata/serverfiles/Engine/Binaries/ThirdParty/SteamCMD/Linux/steamapps:rw`,
        `${dataDir}/steamcmd:/serverdata/serverfiles/Engine/Binaries/ThirdParty/SteamCMD/Linux:rw`,
      ],
      PortBindings: {
        [`${portGame}/udp`]: [
          {
            HostPort: portGame,
          },
        ],
        [`${portGame2}/udp`]: [
          {
            HostPort: portGame2,
          },
        ],
        [`${portSteamQuery}/udp`]: [
          {
            HostPort: portSteamQuery,
          },
        ],
        [`${portRcon}/tcp`]: [
          {
            HostPort: portRcon,
          },
        ],
      },
    },
  };
};

module.exports = {
  getRouteFromUrl,
  translateRequestBodyToContainerOptions,
};
