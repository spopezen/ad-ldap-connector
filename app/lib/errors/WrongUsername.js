var util = require('util');

function WrongUsername(username) {
  this.message = "Wrong username";
  this.username = username;
  this.name = 'WrongUsername';
  Error.call(this, this.message);
  Error.captureStackTrace(this, this.constructor);
}

util.inherits(WrongUsername, Error);

module.exports = WrongUsername;