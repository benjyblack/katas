var _ = require('lodash');
var fizzbuzz = require('../lib/fizzbuzz.js');

_.each(_.range(0, 100), function (i) {
  console.log(`${i} ==> ${fizzbuzz(i)}`);
});
