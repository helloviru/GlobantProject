define(['libs/backbone','models/Album'],function (Backbone,Album) {

  var AlbumCollection = Backbone.Collection.extend({
  	model: Album
  });
  return AlbumCollection;
});
