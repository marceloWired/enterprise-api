"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const enterpriseSchema = new (0, _mongoose.Schema)({
  status: String,
  name: String,
  purpose: String,
  address: {
    cep: String,
    city: String,
    district: String,
    street: String,
    number: String,
    state: String,
    formatedAddress: String
  }
})

 const Enterprise = _mongoose.model.call(void 0, 'Enterprise', enterpriseSchema); exports.Enterprise = Enterprise
