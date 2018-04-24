# Ember Patterns

## 1. Fetching data inside of the component

### Motivation
When we are fetching data in route we are blocking the UI with the `model()` hook,
until the model's promise is not resolved we cannot render our template. Instead of that,
we can fetch the data inside of component, and keep in our route only params/session validations.

### Demo
tbu.

### Example
```javascript
import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  tagName: '',

  init() {
    this._super(...arguments);
    this.set('data', []);
  },

  didInsertElement() {
    this.get('query').perform();
  },

  query: task(function * () {
    const payload = yield this.get('store').findAll('todo');
    this.set('data', payload);
  }).restartable()
});
```

### Packages
[ember-concurrency](http://ember-concurrency.com/docs/introduction/)

### Testing
tbu.


## 2. Content placeholders

### Motivation
Noone like to wait for the website to load. With content placeholders we can replace annoying spinners,
with some nice animation that's shape looks like the content that would be there after some time.

### Demo
tbu.

### Example
tbu.

### Packages
[ember-content-placeholders](https://github.com/michalsnik/ember-content-placeholders/)

### Testing
tbu.
