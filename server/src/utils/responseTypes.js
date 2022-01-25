const badRequestResponse = (message, additionalProps) => {
  return {
    status: 400,
    statusText: 'Bad Request',
    message,
    ...additionalProps,
  };
};

const errorResponse = (message, additionalProps) => {
  return {
    status: 500,
    statusText: 'Error',
    message,
    ...additionalProps,
  };
};

const successResponse = (message, additionalProps) => {
  return {
    status: 200,
    statusText: 'Success',
    message,
    ...additionalProps,
  };
};

const unauthorizedResponse = (message, additionalProps) => {
  return {
    status: 401,
    statusText: 'Unauthorized',
    message,
    ...additionalProps,
  };
};

module.exports = {
  badRequestResponse,
  errorResponse,
  successResponse,
  unauthorizedResponse,
};
