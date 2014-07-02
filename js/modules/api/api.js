define(function() {

  // Constructor
  var API = function(APIkey, baseURL) {
    this.APIkey = APIkey;
    this.baseURL = baseURL;
  };

  // Public methods
  API.prototype.ArtistSearch = function(name, appview) {
      var url = this.baseURL + '?method=artist.search&artist=' + name + '&api_key=' + this.APIkey + '&format=json';
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          appview.updateArtist(xhr.response);
        }
      }
      xhr.open('GET',url,true);
      xhr.send();
      return xhr.response;
  };

  API.prototype.AlbumSearch = function(name, appview) {
      var url = this.baseURL + '?method=album.search&album=' + name + '&api_key=' + this.APIkey + '&format=json';
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          appview.updateAlbum(xhr.response);
        }
      }
      xhr.open('GET',url,true);
      xhr.send();
  };

  API.prototype.AlbumInfoId = function(id, album) {
    var url = this.baseURL + '?method=album.getinfo&mbid=' + id + '&api_key=' + this.APIkey + '&format=json';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        album.putTracks(xhr.response);
      }
    }
    xhr.open('GET',url,true);
    xhr.send();
    return xhr.response;
  };

  API.prototype.AlbumInfoNA = function(albumn,artist,album) {
    var url = this.baseURL + '?method=album.getinfo&artist=' + artist + '&album=' + albumn + '&api_key=' + this.APIkey + '&format=json';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        album.putTracks(xhr.response);
      }
    }
    xhr.open('GET',url,true);
    xhr.send();
    return xhr.response;
  };

  return API;
});
