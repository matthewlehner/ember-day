import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('about');
  this.route('messages', function () {
    this.route('edit', { path: ':message_id' });
  });
});
