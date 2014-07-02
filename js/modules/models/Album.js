define(['libs/backbone'],function (Backbone) {
  var Album =  Backbone.Model.extend ({

    defaults: {
      'name': '',
      'artist': '',
      'id': '',
      'url': '',
      'image': ''
    } 

  });

  return Album;
});