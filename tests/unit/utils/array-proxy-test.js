import { module, test } from 'qunit';
import ArrayProxy from '@ember/array/proxy';
import { A  } from '@ember/array';

module('ArrayProxy: create vs init', function() {
  test('#create', function(assert) {
    const CustomArrayProxy = ArrayProxy.extend({});
    let instance = CustomArrayProxy.create({ content: [] });
    instance.pushObject({ id: 1 });
    assert.equal(instance.get('length'), 1, 'Length is 1');
    instance.pushObject({ id: 2 });
    assert.equal(instance.get('length'), 2, 'Length is 2');
  });

  test('#init', function(assert) {
    const CustomArrayProxy = ArrayProxy.extend({
      init() {
        this._super(...arguments);
        this.set('content', A());
      }
    });
    let instance = CustomArrayProxy.create();
    instance.pushObject({ id: 1 });
    assert.equal(instance.get('length'), 1, 'Length is 1');
    instance.pushObject({ id: 2 });
    assert.equal(instance.get('length'), 2, 'Length is 2');
  });
});

