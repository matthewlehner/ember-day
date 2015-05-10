module.exports = function(app) {
  var express = require('express');
  var messagesRouter = express.Router();

  messagesRouter.get('/', function(req, res) {
    res.send({
      'messages': [{
        'id': 1,
        'body': "I recently got my ember-cli up and running with css,scss,js, and jquery. Everything works just fine until I add return this.store.find('element'); into my routes model. I am using ember-cli mocks to serve up the json.",
        'createdAt': new Date(),
        'user': 1
      },{
        'id': 2,
        'body': "I'm fairly new to ember so forgive me if this is a stupid question. I am using ember-data & I'm wondering whether it is better to return a hash of promises whose data can then be used to populate various UI components, or have multiple nested routes each with a single model that populate different screen outlets?",
        'createdAt': new Date(),
        'user': 2
      },{
        'id': 3,
        'body': "The only problem I have with it is I can't just work on a build tool if I can't understand or tinker with its underlying parts.\n\nAnyways for a long time I thought ember app kit was great but there wasn't a good tool (pre-cli) which not only ran blazing fast but also was super configurable for the kind of weird projects I was working on.",
        'createdAt': new Date(),
        'user': 1
      },{
        'id': 4,
        'body': "You must use AMD module syntax (i.e. the transpiler target module syntax). Using AMD seems bad because then the transpiler abstraction leaks. Shouldn't we always use ES6 module declarations?",
        'createdAt': new Date(),
        'user': 3
      }]
    });
  });

  messagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  messagesRouter.get('/:id', function(req, res) {
    res.send({
      'messages': {
        id: req.params.id
      }
    });
  });

  messagesRouter.put('/:id', function(req, res) {
    res.send({
      'messages': {
        id: req.params.id
      }
    });
  });

  messagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/messages', messagesRouter);
};
