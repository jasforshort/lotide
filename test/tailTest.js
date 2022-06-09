const assert = require('chai').assert;
const tail = require('../tail');

// Test Case
describe("#tail", () => {

  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it('returns 3 for words.length', () => {
    assert.strictEqual(words.length, 3);
  });

  it('returns ["Lighthouse", "Labs"] for tail(words)', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});
