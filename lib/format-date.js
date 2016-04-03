const INPUT_FORMAT_REGEX = new RegExp(/\d{1,2}\/\d{1,2}\/\d{4}$/);

module.exports = function (userDate) {
  if (!INPUT_FORMAT_REGEX.test(userDate)) {
    throw Error('Incorrect input format, expecting MM/DD/YYYY');
  }

  var [month, day, year] = userDate.split('/');

  if (month.length === 1) month = '0' + month;
  if (day.length === 1) day = '0' + day;

  return year + month + day;
};
