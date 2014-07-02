define(['libs/backbone'], function (Backbone) {
  
  var ArtistView = Backbone.View.extend({
    tagName: "li",

    template: _.template($('#artist-template').html()),

    events: {
    },

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.addClass('artist');

      return this;
    }

  });

  return ArtistView;

});
