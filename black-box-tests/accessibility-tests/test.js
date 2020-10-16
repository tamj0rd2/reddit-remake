const pa11y = require('pa11y-ci')
const config = require('./pa11y.conf')
const { inspect } = require('util')

async function runTests() {
  const results = await pa11y('http://localhost:8080', config)
  console.log(inspect(results, false, 100, true))
}

runTests()
