# array-proxy-init-bug

Reproduction of [ISSUE TO COME] using the latest ember-source beta. Failing test is in the [tests/unit/utils/array-proxy-test.js](https://github.com/patocallaghan/array-proxy-init-bug/blob/master/tests/unit/utils/array-proxy-test.js)

Online ember-twiddle using 2.18.2 [here](https://ember-twiddle.com/b789f346f021c0ce484deb838d9f3a38?fileTreeShown=false&openFiles=tests.unit.controllers.my-random-test.js%2C)


Steps
* `yarn`
* `ember test --filter='ArrayProxy'`
