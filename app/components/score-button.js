import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['grade-btn'],
  classNameBindings: ['selected'],

  selected: function () {
    return this.get('buttonValue') === this.get('currentValue');
  }.property('currentValue', 'buttonValue'),

  buttonValue: null,
  currentValue: null,

  click: function () {
    console.log("👋");
    this.sendAction('respondToSelect', this.get('buttonValue'));
  }
});
