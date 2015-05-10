import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: function () {
    return this.get('buttonValue') === this.get('currentValue');
  }.property('currentValue', 'buttonValue'),

  buttonValue: null,
  currentValue: null,

  actions: {
    selectValue: function () {
      console.log("👋");
      this.sendAction('respondToSelect', this.get('buttonValue'));
    }
  }
});
