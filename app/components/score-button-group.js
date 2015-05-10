import Ember from 'ember';

export default Ember.Component.extend({
  currentGrade: null,
  availableValues: [1,2,3,4,5],

  actions: {
    assignGrade: function (grade) {
      this.set('currentGrade', grade);
    }
  }
});
