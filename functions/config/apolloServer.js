"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = undefined;

var _lodash = require("lodash");

var _user = require("../graphql/schema/user");

var _user2 = _interopRequireDefault(_user);

var _user3 = require("../graphql/resolves/user");

var _user4 = _interopRequireDefault(_user3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = [_user2.default];

var resolvers = (0, _lodash.merge)({}, _user4.default);

exports.typeDefs = typeDefs;
exports.resolvers = resolvers;