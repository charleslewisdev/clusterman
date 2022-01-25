const express = require('express');
const controller = require('../controllers/servers');
const router = express.Router();

router.get(
  '/listServers',
  controller.validatorMiddleware,
  controller.listServers
);

router.post(
  '/createServer',
  controller.validatorMiddleware,
  controller.createServer
);

router.post(
  '/restartServer',
  controller.validatorMiddleware,
  controller.restartServer
);

router.post(
  '/startServer',
  controller.validatorMiddleware,
  controller.startServer
);

router.post(
  '/stopServer',
  controller.validatorMiddleware,
  controller.stopServer
);

module.exports = router;
