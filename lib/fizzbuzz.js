module.exports = function (num) {
  var strToReturn = '';

  if (num % 3 === 0) strToReturn += 'fizz';
  if (num % 5 === 0) strToReturn += 'buzz';

  return strToReturn;
};
