"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _enterprises = require('../../services/enterprises');

 const enterpriseFindController =  {
  find: async (req, res) => {
    try {
      const { id } = req.params
      const enterprise = await _enterprises.enterpriseServices.findOne(id)

      if(enterprise === null){
        return res.status(200).json({})
      } else {
        return res.status(200).json(enterprise)
      }
    } catch (error) {
      return res.status(500).json({"serverError": "Something wrent wrong. Try again in a few moments"})
    }
  }
}; exports.enterpriseFindController = enterpriseFindController