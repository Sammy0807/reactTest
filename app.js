'use strict';
const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./middleware/index.json')
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/R-Api')
  .then(() =>  console.log('connection succesful on 3001'))
  .catch((err) => console.error(err));
const db = mongoose.connection;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//pass passport middleware
app.use(passport.initialize());
const localRegisterStrategy = require('./passport/local-register');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-register', localRegisterStrategy);
passport.use('local-login', localLoginStrategy);

//pass the authentication checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
// app.use('/', authCheckMiddleware)

// routes
const index = require('./routes/index');
const api = require('./routes/api');
const auth = require('./routes/auth');
app.use('/', index);
app.use('/api', api);
app.use('/auth', auth);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
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
