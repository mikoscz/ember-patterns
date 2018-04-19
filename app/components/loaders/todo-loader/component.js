import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  // Contextual component without tag
  tagName: '',

  init() {
    this._super(...arguments);
    this.set('data', []);
  },

  didReceiveAttributes() {
    // There should land logic responsible for retriggering another query
    // this.get('query').perform();
  },

  didInsertElement() {
    // Initial query - can be also done in didReceiveAttributes hook if there is condiditional case
    this.get('query').perform();
  },

  query: task(function * () {
    // Case with store
    // Make the async query
    // (Need to inject store first)
    // const payload = yield this.get('store').findAll('todo');

    // Example fake query

    const payload = [
      { name: 'first', done: false },
      { name: 'second', done: true },
      { name: 'three', done: true },
    ]

    yield timeout(2000);
    this.set('data', payload);
  }).restartable()
});
