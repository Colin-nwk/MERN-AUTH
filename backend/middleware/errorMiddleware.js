//! custo error handler because we are using api, and dont want thr default html handler, this is just a basic

//* add error logger to this later

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  //mongo-db error catcher
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource Not Found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? neull : err.stack,
  });
};

export { notFound, errorHandler };
