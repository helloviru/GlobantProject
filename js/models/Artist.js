define( function () {
  var Artist = Backbone.Model.extend({
    defaults: {
      'nameArtist': '',
      'mbid': '',
      'url': '',
      'image_small': '',
      'image': '',
    }

  });
  return Artist;
});