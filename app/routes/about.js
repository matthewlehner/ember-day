import Ember from 'ember';

export default Ember.Route.extend({
  beforModel: function () {
    return Ember.$.getJSON('api/today-view').then(function (jsonPayload) {
      this.store.pushPayload(jsonPayload);
    });
  },
  model: function () {
    return new Ember.RSVP.Hash({
      tasks: this.store.find('task'),

    })


  }
});
