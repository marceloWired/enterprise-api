"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config()
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

 const connectDatabase = async () => {
  try {
    await _mongoose2.default.connect(process.env.DATABASE_URL)
  } catch (error) {
    console.error(error)
  }
}; exports.connectDatabase = connectDatabase
