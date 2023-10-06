/** Application for bank.ly */

const express = require('express');
const app = express();
const ExpressError = require("./helpers/expressError");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);


/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;
