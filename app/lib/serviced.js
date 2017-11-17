var request = require('request');

function apiURL(ip) {
  return 'https://' + ip + '/api/v2';
}

// callback gets err and an array of services
function getServices(ip, name, callback) {
  return request.get({
    url:  apiURL(ip) + '/services' + name != undefined ? '?name=' + name : '',
    json: true
  }, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      console.log("Unable to communicate with Control Center API");
      console.log("Not updating config file in service");
      return callback(err);
    }
    return callback(err, body.results);
  });
}

// callback gets err and an array of service configs
function getServiceConfigs(ip, svcID, callback) {
  return request.get({
    url:  apiURL(ip) + '/services/' + svcID + '/serviceconfigs',
    json: true
  }, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      console.log("Unable to communicate with Control Center API");
      console.log("Not updating config file in service");
      return callback(err);
    }
    return callback(err, body);
  });
}

// callback gets err and a full service config
function getServiceConfig(ip, cfgID, callback) {
  return request.get({
    url:  apiURL(ip) + '/serviceconfigs/' + cfgID,
    json: true
  }, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      console.log("Unable to communicate with Control Center API");
      console.log("Not updating config file in service");
      return callback(err);
    }
    return callback(err, body);
  });
}

// callback gets err
function putServiceConfig(ip, cfgID, cfg, callback) {
  request.put({
    url:  apiURL(ip) + '/serviceconfigs/' + cfgID,
    json: cfg
  }, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      console.log("Unable to communicate with Control Center API");
      console.log("Not updating config file in service");
      return cb();
    }
    return callback(err);
  });
}

module.exports = {
  getServices: getServices,
  getServiceConfigs: getServiceConfigs,
  getServiceConfig: getServiceConfig,
  putServiceConfig: putServiceConfig
};
