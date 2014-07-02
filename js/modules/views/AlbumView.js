define(['libs/backbone'], function (Backbone) {
  var AlbumView = Backbone.View.extend({

    template: _.template($('#album-template').html()),

    events: {
    },

    initialize: function() {
      //this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));

      /*this.parts = {
        albumname = this.$('.name'),
        title: this.$('.artist'),
        year: this.$('.url'),
        genres: this.$('.pic'),
      }*/

      return this;
    }

  });

  return AlbumView;

});
