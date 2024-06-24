'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      prepend: 'https://mowlavie.github.io/widget/'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.

  return app.toTree();
};
