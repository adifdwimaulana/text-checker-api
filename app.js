var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db.config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Cors config
const corsOptions = {
  origin: ['http://localhost:3000', 'http://192.168.43.106', 'http://147.139.193.43', '0.0.0.0', 'https://text-checker-client.herokuapp.com', 'http://127.0.0.1:5500'], 
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Connect to mongoDB
mongoose.connect(config.url, config.options);
const db = mongoose.connection;
db.on('open', console.info.bind(console, 'Connection to the database was successfully established!'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
