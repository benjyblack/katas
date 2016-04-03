var expect = require('chai').expect;
var fizzbuzz = require('../lib/fizzbuzz.js');

describe('fizzbuzz', function () {
  it('returns fizzbuzz given 0', function () {
    expect(fizzbuzz(0)).to.equal('fizzbuzz');
  });

  it('returns an empty string given 1', function () {
    expect(fizzbuzz(1)).to.equal('');
  });

  it('returns fizz given 3', function () {
    expect(fizzbuzz(3)).to.equal('fizz');
  });

  it('returns buzz given 5', function () {
    expect(fizzbuzz(5)).to.equal('buzz');
  });

  [15, 30, 45].forEach(function (num) {
    it('returns fizzbuzz given ' + num, function () {
      expect(fizzbuzz(num)).to.equal('fizzbuzz');
    });
  });
});
