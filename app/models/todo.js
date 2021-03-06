import DS from 'ember-data';

var todos = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

todos.reopenClass({
FIXTURES: [
  {
    id: 1,
    title: "Learn Ember",
    isCompleted: false
  },
  {
    id: 2,
    title: "...",
    isCompleted: true
  },
  {
    id: 3,
    title: "Profit!",
    isCompleted: false
  }
]
});

export default todos;
