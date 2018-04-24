import Route from '@ember/routing/route';
import { task, timeout } from 'ember-concurrency';

export default Route.extend({
  model() {
    this.set('data', []);

    const query = this.get('query').perform();
    return {
      isRunning: query.isRunning,
      data: this.get('data')
    }
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

