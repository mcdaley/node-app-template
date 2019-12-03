#!/usr/bin/env node
//-----------------------------------------------------------------------------
// index.js
//-----------------------------------------------------------------------------

function hello() {
  return 'Hello';
}

const goodbye = () => {
  return 'Goodbye';
}

class Set {
  constructor() {
    this.data = {};
  }

  farewell = () => {
    return 'Farewell';
  }
}

module.exports = { hello, goodbye, Set };