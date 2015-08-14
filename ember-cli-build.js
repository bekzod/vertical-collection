/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    snippetPaths: ['tests/dummy/snippets'],
    snippetSearchPaths: ['app', 'tests/dummy/app', 'addon'],
    minifyJS: { enabled: false }
  });

  var bootstrapPath = app.bowerDirectory + '/bootstrap/dist/';
  app.import(bootstrapPath + 'css/bootstrap.css');
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.eot', { destDir: '/fonts' });
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.svg', { destDir: '/fonts' });
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.ttf', { destDir: '/fonts' });
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.woff', { destDir: '/fonts' });
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.woff2', { destDir: '/fonts' });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};