define(['libs/backbone'],function () {
  var Album =  Backbone.Model.extend ({

    defaults: {
      'name': '',
      'artist': '',
      'id': '',
      'url': '',
      'imagesmall': '',
      'imagemedium': '',
      'imagebig': ''
    } 

  });

  return Album;
});