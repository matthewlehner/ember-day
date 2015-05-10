import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('user', {async: true}),

  score: 1,

  bodySummary: function () {
    return this.get('body').substring(0, 47) + "...";
  }.property('body', 'createdAt')
});
