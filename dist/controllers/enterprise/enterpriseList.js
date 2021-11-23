"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _enterprises = require('../../services/enterprises');

 const enterpriseListController =  {
  listAll: async (req, res) => {
    try {
      const limitString = req.query['_limit'] ? req.query['_limit'].toString() : ''
      const limit = limitString ? parseInt(limitString) : 0 
    
      const queryResult = await _enterprises.enterpriseServices.findAll(limit)
    
      return res.status(200).json(queryResult)
    } catch (error) {
      return res.status(500).json({"serverError": "Something wrent wrong. Try again in a few moments"})
    }
  }
}; exports.enterpriseListController = enterpriseListController