import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fetching/route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fetching/route');
    assert.ok(route);
  });
});
