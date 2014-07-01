define(['libs/backbone','collections/AlbumList','collections/ArtistList','models/Artist','views/ArtistView'],
function (Backbone,AlbumList,ArtistList,Artist,ArtistView) {
  var AppView = Backbone.View.extend({
  	el: $('body'),
    
    events: {
      'click .search-artist':  'searchArtist',
      'click .search-album': 'searchAlbum'
    },

    initialize: function(lastfm) {
      this.AlbumList = new AlbumList();
      this.ArtistList = new ArtistList();
      this.toSearch = this.$('.searcher');
      this.container = this.$('.result');

    },

    searchArtist: function() {
      this.AlbumList.reset();
      this.ArtistList.reset();
      var json = lastfm.ArtistSearch($(this.toSearch).val());
      $(this.container).empty();
      var jsonParse = JSON.parse(json);
      var results = jsonParse.results.artistmatches.artist;
      for (var i = 0 ; (i < 10 && i < results.length); i++ ) {
        var name = results[i].name;
        var url = results[i].url;
        var mbid = results[i].mbid;
        var artist = new Artist({name: name, url: url, mbid:mbid });
        this.ArtistList.add(artist);
        var view = new ArtistView({model: artist});
        this.container.append(view.render().el);
      }
    },

    searchAlbum: function() {
      this.ArtistList.reset();
      this.AlbumList.reset();
      var json = lastfm.AlbumSearch($(this.toSearch).val());
      $(this.container).empty();
    }

  });
  return AppView;
});
