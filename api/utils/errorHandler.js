// fucntion take the message and the status code and return an error object with the message and the status code
export const errorHandler = (message, statusCode) => {
  // create a new error object
  const error = new Error(message);
  // add the status code to the error object
  error.statusCode = statusCode;
  // add the message to the error object
  error.message = message;
  return error;
};
