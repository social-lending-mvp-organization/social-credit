const loans = require('./loans');
const login = require('./login');
const info = require('./info');
const emi = require('./emi');
const twitter = require('./twitter');

module.exports = [].concat(
  loans,
  login,
  info,
  emi,
  twitter,
);
