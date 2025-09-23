
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // log error in console

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message || "Something went wrong",
    // stack only in development
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
