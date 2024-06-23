'use strict';

define("widget/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("widget/tests/integration/components/booking-form-test", ["qunit", "widget/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"widget/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | booking-form', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <BookingForm />
      */
      {
        "id": "02kDMyuR",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"booking-form\"]]",
        "moduleName": "/workspace/widget/widget/widget/tests/integration/components/booking-form-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <BookingForm>
              template block text
            </BookingForm>
          
      */
      {
        "id": "9I7hqce0",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"booking-form\"]]",
        "moduleName": "/workspace/widget/widget/widget/tests/integration/components/booking-form-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("widget/tests/test-helper", ["widget/app", "widget/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"widget/app",0,"widget/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("widget/tests/unit/models/activity-test", ["widget/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"widget/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | activity', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('activity', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("widget/tests/unit/models/availability-date-test", ["widget/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"widget/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | availability date', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('availability-date', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("widget/tests/unit/models/availability-time-test", ["widget/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"widget/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | availability time', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('availability-time', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("widget/tests/unit/models/booking-test", ["widget/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"widget/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | booking', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('booking', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("widget/tests/unit/models/ticket-test", ["widget/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"widget/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | ticket', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('ticket', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("widget/tests/unit/routes/booking-test", ["qunit", "widget/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"widget/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | booking', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:booking');
      assert.ok(route);
    });
  });
});
define("widget/tests/unit/routes/booking/confirmation-test", ["qunit", "widget/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"widget/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | booking/confirmation', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:booking/confirmation');
      assert.ok(route);
    });
  });
});
define("widget/tests/unit/routes/booking/index-test", ["qunit", "widget/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"widget/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | booking/index', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:booking/index');
      assert.ok(route);
    });
  });
});
define("widget/tests/unit/routes/thank-you-test", ["qunit", "widget/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"widget/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | thank-you', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:thank-you');
      assert.ok(route);
    });
  });
});
define('widget/config/environment', [], function() {
  var prefix = 'widget';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('widget/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
