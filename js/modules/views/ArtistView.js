define( function () {
  var ArtistView = Backbone.View.extend({
  	tagName: "li",

    events: {
      "click .icon":  "open",
      "click .button.edit": "openEditDialog",
      "click .button.delete": "destroy"
    },

    initialize: function() {
      this.listenTo(this.model, "change", this.render);
    },

    render: function() {
      ...
    }
  });
  return ArtistView;
});
