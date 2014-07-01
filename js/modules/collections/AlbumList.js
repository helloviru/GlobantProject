define( function () {
  var AlbumCollection = Backbone.Collection.extend({
  	model: Album;
  });
  return AlbumCollection;
});
