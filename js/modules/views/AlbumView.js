define(['libs/backbone'], function (Backbone) {
  var AlbumView = Backbone.View.extend({

    template: _.template($('#album-template').html()),

    events: {
      'click .picture': 'showTracks',
    },

    initialize: function() {
      this.render();
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },


    showTracks: function() {
      this.model.getTracks();
      if (this.$el.hasClass('expanded')) {
        this.$el.removeClass('expanded');
      }
      else {
        this.$el.addClass('expanded');
      }
    }
  });

  return AlbumView;

});
