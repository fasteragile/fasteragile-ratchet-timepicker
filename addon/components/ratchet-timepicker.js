import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['ratchet-timepicker'],

  value: null,

  actions: {
    timeUpdated: function() {
      this.sendAction('timeUpdated', this.get('value'));
    }
  }

});
