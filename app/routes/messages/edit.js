import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    this.store.find('message', params.message_id);
  },

  actions: {
    willTransition: function (transition) {
      var message = this.controller.get('model');
      message.rollback();
    }
  }
});
