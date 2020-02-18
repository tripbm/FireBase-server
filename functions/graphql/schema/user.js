"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  input inputUser {\n    email: String!\n    password: String!\n    phoneNumber: String\n    name: String!\n    birthday: String\n    address: String\n    role: String\n  }\n\n  input updateUser {\n    phoneNumber: String\n    name: String!\n    birthday: String\n    address: String\n    role: String\n  }\n\n  type user {\n    id: String\n    email: String\n    phoneNumber: String\n    name: String\n    birthday: String\n    address: String\n    role: String\n  }\n\n  type Query {\n    getUser(_id: String): user\n    getListUser: [user]\n  }\n\n  type Mutation {\n    createUser(data: inputUser!): user!\n    updateUser(_id: String!, data: updateUser): user\n    deleteUser(_id: String!): Boolean\n  }\n"], ["\n  input inputUser {\n    email: String!\n    password: String!\n    phoneNumber: String\n    name: String!\n    birthday: String\n    address: String\n    role: String\n  }\n\n  input updateUser {\n    phoneNumber: String\n    name: String!\n    birthday: String\n    address: String\n    role: String\n  }\n\n  type user {\n    id: String\n    email: String\n    phoneNumber: String\n    name: String\n    birthday: String\n    address: String\n    role: String\n  }\n\n  type Query {\n    getUser(_id: String): user\n    getListUser: [user]\n  }\n\n  type Mutation {\n    createUser(data: inputUser!): user!\n    updateUser(_id: String!, data: updateUser): user\n    deleteUser(_id: String!): Boolean\n  }\n"]);

var _apolloServerExpress = require("apollo-server-express");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject);

exports.default = typeDefs;