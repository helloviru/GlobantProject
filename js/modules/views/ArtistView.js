define(['libs/backbone'], function (Backbone) {
  
  var ArtistView = Backbone.View.extend({
    tagName: "li",

    template: _.template($('#artist-template').html()),

    events: {
    },

    initialize: function() {
      //this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.addClass('artist');

      /*this.parts = {
        albumname = this.$('.name'),
        title: this.$('.artist'),
        year: this.$('.url'),
        genres: this.$('.pic'),
      }*/

      return this;
    }

  });

  return ArtistView;

});
