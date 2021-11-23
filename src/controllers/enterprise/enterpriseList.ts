import { Request, Response} from 'express'
import { enterpriseServices } from '../../services/enterprises'

export const enterpriseList =  {
  listAll: async (req: Request, res: Response) => {
    try {
      const limitString = req.query['_limit'] ? req.query['_limit'].toString() : ''
      const limit = limitString ? parseInt(limitString) : 0 
    
      const queryResult = await enterpriseServices.findAll(limit)
    
      return res.status(200).json(queryResult)
    } catch (error) {
      return res.status(500).json({"serverError": "Something wrent wrong. Try again in a few moments"})
    }
  }
}