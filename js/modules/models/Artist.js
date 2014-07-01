define(['libs/backbone'], function () {
  var Artist = Backbone.Model.extend({
    defaults: {
      'name': '',
      'mbid': '',
      'url': ''
    }

  });
  return Artist;
});