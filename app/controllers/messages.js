import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editMessage: function (message) {
      this.transitionToRoute('messages.edit', message);
    }
  }
});
