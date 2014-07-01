define( function () {
  var AppView = Backbone.View.extend({
    //VER EL INDEX
  	el: $("#"),
    statsTemplate: _.template($('#main-template').html()),
    events: {
      "keypress #new-todo":  "createOnEnter"
    },
    initialize: function() {
      this.listenTo(Todos, 'add', this.addOne);
      this.listenTo(Todos, 'reset', this.addAll);
      this.listenTo(Todos, 'all', this.render);

      this.footer = this.$('footer');
      this.main = $('#main');

      Todos.fetch();
    },
    render: function() {
      
    },
    search: function() {
      
    }
  });
  return AppView;
});
