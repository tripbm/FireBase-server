"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseDatasource = function BaseDatasource(database) {
  _classCallCheck(this, BaseDatasource);

  this.database = database;
};

exports.default = BaseDatasource;