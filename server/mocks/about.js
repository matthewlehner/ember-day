module.exports = function(app) {
  var express = require('express');
  var aboutRouter = express.Router();

  aboutRouter.get('/', function(req, res) {
    res.send({
      'title': 'The about page.',
      'body': 'Not a lot of things to say.'
    });
  });

  app.use('/api/about', aboutRouter);
};
