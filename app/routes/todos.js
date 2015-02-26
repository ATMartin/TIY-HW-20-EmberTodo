import Ember from 'ember';

var TodoRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

export default TodoRoute;
