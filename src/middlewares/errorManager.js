const errorManager = (err, _req, res, _next) => {
  if (err.name === 'CustomError') {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
};

module.exports = errorManager;
