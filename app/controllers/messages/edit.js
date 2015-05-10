import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateMessage: function () {
      this.model.save();
      this.transitionToRoute('messages.index');
    },
    rollbackMessage: function () {
      this.model.rollback();
    }
  }
});
