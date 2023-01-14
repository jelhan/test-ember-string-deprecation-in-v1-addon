import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dasherize', function (hooks) {
  setupRenderingTest(hooks);

  test('it dasherizes a string', async function (assert) {
    await render(hbs`{{dasherize "fooBar"}}`);

    assert.dom(this.element).hasText('foo-bar');
  });
});
