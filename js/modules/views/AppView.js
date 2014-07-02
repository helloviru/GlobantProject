define(['libs/backbone','collections/AlbumList','collections/ArtistList','models/Artist','views/ArtistView','models/Album','views/AlbumView'],
function (Backbone,AlbumList,ArtistList,Artist,ArtistView,Album,AlbumView) {
  var AppView = Backbone.View.extend({
  	el: $('body'),
    
    events: {
      'click .search-artist':  'searchArtist',
      'click .search-album': 'searchAlbum'
    },

    initialize: function() {
      this.AlbumList = new AlbumList();
      this.ArtistList = new ArtistList();
      this.toSearch = this.$('.searcher');
      this.container = this.$('.result');
    },

    searchArtist: function() {
      lastfm.ArtistSearch($(this.toSearch).val(),this);
    },

    updateArtist: function(response) {
      this.AlbumList.reset();
      this.ArtistList.reset();
       $(this.container).empty();
      var jsonParse = JSON.parse(response);
      if (typeof jsonParse.results != 'undefined') {
        var results = jsonParse.results.artistmatches.artist;
        if (typeof results != 'undefined') {
          for (var i = 0 ; (i < 10 && i < results.length); i++ ) {
            var name = results[i].name;
            var url = results[i].url;
            var mbid = results[i].mbid;
            var image = results[i].image[1]['#text'];
            var artist = new Artist({name: name, url: url, mbid:mbid,image: image });
            this.ArtistList.add(artist);
            var view = new ArtistView({model: artist});
            this.container.append(view.render().el);
          }
        }
        else {
          $(this.container).append('<h3>No artist found...</h3>');
        }
      }
    },

    searchAlbum: function() {
      lastfm.AlbumSearch($(this.toSearch).val(),this);
    },

    updateAlbum: function(response) {
      this.ArtistList.reset();
      this.AlbumList.reset();
      $(this.container).empty();
      var jsonParse = JSON.parse(response);
      if (typeof jsonParse.results != 'undefined') {
        var results = jsonParse.results.albummatches.album;
        if (typeof results != 'undefined') {
          for (var i = 0 ; (i < 10 && i < results.length); i++ ) {
            var name = results[i].name;
            var mbid = results[i].mbid;
            var url = results[i].url;
            var artist = results[i].artist;
            var image = results[i].image[1]['#text'];
            var album = new Album({name: name, url: url, mbid:mbid, artist: artist, image: image });
            this.AlbumList.add(album);
            var view = new AlbumView({model: album});
            this.container.append(view.render().el);
          }
        }
        else {
          $(this.container).append('<h3>No album found...</h3>');
        }
      }
    }

  });
  return AppView;
});
