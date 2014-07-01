define(function() {

  // Constructor
  var API = function(APIkey, baseURL) {
    this.APIkey = APIkey;
    this.baseURL = baseURL;
  };

  // Public methods
  API.prototype.ArtistSearch = function(name) {
      var url = this.baseURL + '?method=artist.search&artist=' + name + '&api_key=' + this.APIkey + '&format=json';
      var xhr = new XMLHttpRequest();
      xhr.open('GET',url,false);
      xhr.send();
      return xhr.response;
  };

  API.prototype.AlbumSearch = function(name) {
      var url = this.baseURL + '?method=album.search&album=' + name + '&api_key=' + this.APIkey + '&format=json';
      var xhr = new XMLHttpRequest();
      xhr.open('GET',url,false);
      xhr.send();
      return xhr.response;
  };

  API.prototype.AlbumInfo = function(id) {
    var url = this.baseURL + '?method=album.getinfo&mbid=' + id + '&api_key=' + this.APIkey + '&format=json';
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,false);
    xhr.send();
    return xhr.response;
  };

  return API;
});
