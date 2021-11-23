"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _enterprises = require('../../services/enterprises');

 const enterpriseDeleteController =  {
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const enterprise = await _enterprises.enterpriseServices.delete(id)

      if(enterprise){
        return res.status(204).json({})
      }else {
        return res.status(404).json({"error": "enterprise not found"})
      }

    } catch (error) {
      return res.status(500).json({"serverError": "Something wrent wrong. Try again in a few moments"})
    }
  }
}; exports.enterpriseDeleteController = enterpriseDeleteController