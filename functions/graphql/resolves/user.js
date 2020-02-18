"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebaseAdmin = require("firebase-admin");

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvers = {
  Query: {
    getUser: async function getUser(_, args, _ref, info) {
      var userDS = _ref.userDS;
      return userDS.getUserByID(args._id);
    },
    getListUser: async function getListUser(obj, args, context, info) {
      var users = [];
      var user = await _firebaseAdmin2.default.firestore().collection("users").get().then(function (snapshot) {
        snapshot.forEach(function (doc) {
          var user = doc.data();
          user.id = doc.id;
          users.push(user);
        });
      });
      return users;
    }
  },
  Mutation: {
    createUser: async function createUser(obj, args, context, info) {
      var data = args.data;

      var createUser = await _firebaseAdmin2.default.firestore().collection("users").add(data);
      var user = data;
      user.id = createUser.id;
      return user;
    },
    updateUser: async function updateUser(obj, args, context, info) {
      var _id = args._id,
          data = args.data;

      await _firebaseAdmin2.default.firestore().collection("users").doc(_id).update(data);
      var user = data;
      user.id = _id;
      return user;
    },
    deleteUser: async function deleteUser(obj, args, context, info) {
      var _id = args._id;

      var user = await _firebaseAdmin2.default.firestore().collection("users").doc(_id).delete();
      return true;
    }
  }
};

exports.default = resolvers;