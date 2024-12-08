export const globalErrorHandler = async (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "production") {
    res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      success: false,
      error: err.message,
      stack: err.stack,
    });
  }
};

export function catchError(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}
