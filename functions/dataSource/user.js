"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require("./base");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserDS = function (_BaseDatasource) {
  _inherits(UserDS, _BaseDatasource);

  function UserDS(database) {
    _classCallCheck(this, UserDS);

    var _this = _possibleConstructorReturn(this, (UserDS.__proto__ || Object.getPrototypeOf(UserDS)).call(this, database));

    _this.userRef = _this.database.firestore().collection("users");
    return _this;
  }

  _createClass(UserDS, [{
    key: "getUserByID",
    value: async function getUserByID(id) {
      var userQuery = await this.userRef.doc(id).get();
      var user = userQuery.data();
      user.id = id;
      user.birthday = user.birthday ? user.birthday._seconds : null;
      return user;
      // const { _id } = args;
      // const query = await admin.firestore().doc(`users/${_id}`).get();
      // let user = query.data();
      // if (user) user.id = query.id;
      // return user;
    }
  }]);

  return UserDS;
}(_base2.default);

exports.default = UserDS;