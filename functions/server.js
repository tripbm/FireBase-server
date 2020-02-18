"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _firebaseAdmin = require("firebase-admin");

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

var _apolloServerExpress = require("apollo-server-express");

var _reviewbookServerFirebaseAdminsdk = require("./reviewbook-server-firebase-adminsdk.json");

var _reviewbookServerFirebaseAdminsdk2 = _interopRequireDefault(_reviewbookServerFirebaseAdminsdk);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _apolloServer = require("./config/apolloServer");

var _user = require("./dataSource/user");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_firebaseAdmin2.default.initializeApp({
  credential: _firebaseAdmin2.default.credential.cert(_reviewbookServerFirebaseAdminsdk2.default),
  databaseURL: "https://reviewbook-server.firebaseio.com"
});
var configureServer = function configureServer() {
  var app = (0, _express2.default)();
  app.use((0, _cors2.default)());
  var server = new _apolloServerExpress.ApolloServer({
    typeDefs: _apolloServer.typeDefs,
    resolvers: _apolloServer.resolvers,
    context: async function context(_ref) {
      var req = _ref.req,
          res = _ref.res;
      return {
        req: req,
        res: res,
        userDS: new _user2.default(_firebaseAdmin2.default)
      };
    }
  });
  server.applyMiddleware({ app: app });
  // finally return the application
  return app;
};

exports.default = configureServer;