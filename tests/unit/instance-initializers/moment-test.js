import Application from '@ember/application';

import { initialize } from 'mooc-client/instance-initializers/moment';
import { module, skip } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Instance Initializer | moment', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.instanceInitializer({
      name: 'initializer under test',
      initialize
    });
    this.application = this.TestApplication.create({ autoboot: false });
    this.instance = this.application.buildInstance();
  });
  hooks.afterEach(function() {
    run(this.application, 'destroy');
    run(this.instance, 'destroy');
  });

  // Replace this with your real tests.
  skip('it works', async function(assert) {
    await this.instance.boot();

    assert.ok(true);
  });
});
