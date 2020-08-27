"use strict"

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cronJob = require('node-cron')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const initAppExpress = function( app ){
    app.express.set('views', path.join(__dirname, 'views'));
    app.express.set('view engine', 'hbs');

    app.express.use(logger('dev'));
    app.express.use(express.json());
    app.express.use(express.urlencoded({ extended: false }));
    app.express.use(cookieParser());
    app.express.use(express.static(path.join(__dirname, 'public')));

    app.express.use('/', indexRouter);
    app.express.use('/users', usersRouter);// catch 404 and forward to error handler

    const createError = require('http-errors');
    app.express.use(function(req, res, next) {
      next(createError(404));
    })

    app.express.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
}

const initApp = function( app ){
  app.express = express();
  initAppExpress( app ); 
  const appPulse = require('@server/appPulse').appPulse; 
  cronJob.schedule('* * * * *', appPulse.echo);
  return app;  
}



module.exports = {
  initApp
}
