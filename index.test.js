//-----------------------------------------------------------------------------
// index.test.js
//-----------------------------------------------------------------------------
const {hello, goodbye, Set } = require('./index')

describe('Hello', () => {
  it('Returns hello', () => {
    expect(hello()).toBe('Hello');
  })

  it('Returns goodbye', () => {
    expect(goodbye()).toBe('Goodbye');
  })

  it('Returns farewell', () => {
    let s = new Set();
    expect(s.farewell()).toBe('Farewell');
  })
})
