const {errorResponse} = require('../utils/responseTypes');

const reqHandler =
  (fn) =>
  async ({body}, res) => {
    try {
      const response = await fn(body);
      res.status(response.status || 200).json(response);
    } catch (err) {
      console.error(err);
      res.status(err.status || 500).json(errorResponse(err.message || 'Error'));
    }
  };

module.exports = {
  reqHandler,
};
