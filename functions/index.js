'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebaseFunctions = require('firebase-functions');

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _server2.default)();
var api = _firebaseFunctions.https.onRequest(server);

exports.default = { api: api };