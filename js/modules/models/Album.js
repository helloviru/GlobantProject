define(['libs/backbone'],function (Backbone) {
  
  var Album =  Backbone.Model.extend ({

    defaults: {
      'name': '',
      'artist': '',
      'mbid': '',
      'url': '',
      'image': '',
      'tracks' : []
    },

    getTracks: function() {
      if (this.get('tracks').length == 0) {
        if (this.get('mbid') != '') {
          lastfm.AlbumInfoId(this.get('mbid'),this);
        }
        else {
          lastfm.AlbumInfoNA(this.get('name'),this.get('artist'),this);
        }
      }
    },

    putTracks: function(response) {
      var newtracks = [];
      var jsonParse = JSON.parse(response);
      var results = jsonParse.album.tracks.track;
      for (var i = 0 ; i < results.length; i++ ) {
        var name = results[i].name;
        var duration = results[i].duration;
        var data = ({name: name, duration:duration});
        newtracks.push(data);
      }
      this.set('tracks', newtracks);
    }

  });

  return Album;
});