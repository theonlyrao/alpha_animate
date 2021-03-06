var express = require('express');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/react', function (req, res) {
    res.sendFile(__dirname + '/public/main.bundle.js')
});

app.get('/stylesheet', function (req, res) {
    res.sendFile(__dirname + '/public/stylesheets/style.css')
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
