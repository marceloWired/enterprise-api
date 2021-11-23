"use strict";Object.defineProperty(exports, "__esModule", {value: true});


 const enterpriseMapper = (enterpriseWithoutId, id) => {  
  return Object.assign({}, enterpriseWithoutId, { id })
}; exports.enterpriseMapper = enterpriseMapper