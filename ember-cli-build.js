'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      prepend: 'https://mowlavie.github.io/widget/'
    }
  });

  return app.toTree();
};
