import Ember from 'ember';

export function myField(input) {
  return input;
}

export default Ember.Handlebars.makeBoundHelper(myField);
