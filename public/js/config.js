/**
 * Created with IntelliJ IDEA.
 * User: pat
 * Date: 12/8/2013
 * Time: 10:22 PM
 * To change this template use File | Settings | File Templates.
 */
requirejs.config({
  baseUrl: '/js/',
  shim: {
    jquery: {
      exports: 'jQuery'
    },
    underscore: {
      exports: '_'
    },
    'semantic': {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    'json-schema': {
      deps: ['async'],
      exports: 'SchemaInspector'
    },
    'platform': {
      exports: 'Platform'
    },
    'polymer': {
      deps: ['platform'],
      exports: 'Polymer',
      init: function () {
        this.Polymer.require = function (tag, deps, func) {
          require(deps, function () {
            Polymer(tag, func.apply(this, arguments));
          });
        };
        return this.Polymer;
      }
    }
  },
  paths: {
    'jquery': 'bower_components/jquery/jquery',
    'text': 'bower_components/requirejs-text/text',
    'underscore': 'bower_components/underscore/underscore',
    'json-schema': 'bower_components/schema-inspector/lib/schema-inspector',
    'semantic': 'bower_components/semantic-ui/build/packaged/javascript/semantic.min',
    'async': 'bower_components/requirejs-plugins/src/async',
    'propertyParser': 'bower_components/requirejs-plugins/lib/require/propertyParser',
    'platform': 'bower_components/platform/platform',
    'polymer': 'bower_components/polymer/polymer'
  }
});
