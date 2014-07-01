requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: './libs/jquery-v1.11.1',
    underscore: './libs/underscore-v1.5.0',
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

requirejs([], function() {
  
});