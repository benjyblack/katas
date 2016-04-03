var expect = require('chai').expect;
var formatDate = require('../lib/format-date');

describe('format-date', function () {
  context('when given a date in M/D/YYYY format', function () {
    it('returns a string', function () {
      expect(formatDate('12/31/2014')).to.be.a('string');
    });

    var TEST_DATES = [
      { in: '1/31/2014',  out: '20140131' },
      { in: '01/31/2014', out: '20140131' },
      { in: '12/1/2014',  out: '20141201' },
      { in: '12/01/2014', out: '20141201' }
    ];

    TEST_DATES.forEach(function (testDate) {
      it('transforms ' + testDate.in + ' to ' + testDate.out, function () {
        expect(formatDate(testDate.in)).to.equal(testDate.out);
      });
    });
  });

  context('when string does not follow correct format', function () {
    var INCORRECT_FORMATS = [
      '12-31-2014',
      '12 31 2014',
      'Monday, 31st of December 2014'
    ];

    INCORRECT_FORMATS.forEach(function (incorrectFormat) {
      it('throws an error for format ' + incorrectFormat, function () {
        expect(formatDate.bind(null, incorrectFormat)).to.throw(Error);
      });
    });
  });
});
