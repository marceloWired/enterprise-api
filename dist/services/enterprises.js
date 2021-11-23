"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _enterprise = require('../models/enterprise');
var _enterpriseMapper = require('../utils/enterpriseMapper');

 const enterpriseServices = {
  create: async (addEnterprise) => {
    const createdEnterprise = await _enterprise.Enterprise.create(addEnterprise)
    const { _id, ...enterpriseWithoutId } = createdEnterprise._doc

    return _enterpriseMapper.enterpriseMapper.call(void 0, enterpriseWithoutId, _id)
  },
  findAll: async (limit) => {
    const queryResult = await _enterprise.Enterprise.find({}, null, { limit: limit})
    
    const enterpriseList = []

    queryResult.map((currentItem) => {
      const { _id, ...enterpriseWithoutId } = currentItem._doc

      const enterpriseWithId = _enterpriseMapper.enterpriseMapper.call(void 0, enterpriseWithoutId, _id)
     
      return enterpriseList.push(enterpriseWithId)
    })

    return enterpriseList  
  },
  findOne: async (id) => {  
    return await _enterprise.Enterprise.findOne({_id: id})
  },
  delete: async (id) => {
    const { deletedCount } = await _enterprise.Enterprise.deleteOne({_id: id})

    if (deletedCount > 0) {
      return true
    } else {
      return false
    }    
  },
  update: async (enterpriseData, id) => {
    const { matchedCount } = await _enterprise.Enterprise.updateOne({ _id: id}, enterpriseData)
    
    if(matchedCount > 0) {
      return true
    } else {
      return false
    }
  }
}; exports.enterpriseServices = enterpriseServices
