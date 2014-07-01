requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: './libs/jquery-v1.11.1',
    underscore: './libs/underscore-v1.5.0',
    api: './modules/api/api',
    models: './modules/models',
    views: './modules/views',
    controllers: './modules/controllers'
  },
  shim: {
    'libs/backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'libs/underscore-v1.5.0': {
      exports: '_'
    },
    'libs/jquery-v1.11.1': {
      exports: '$'
    }
  }
});

// Guardar los modulos propios en js/modules
    // mimodulo = 'modules/mimodulo'

requirejs(['api'], function(API) {
  lastfm = new API('909ddf89b315de9a146f114d7cffb8a6','http://ws.audioscrobbler.com/2.0/');

});