var _ = require('lodash');
var fizzbuzz = require('../lib/fizzbuzz.js');

console.log(_.chain(0)
  .range(100)
  .map(fizzbuzz)
  .compact()
  .value());
