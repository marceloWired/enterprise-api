import { Request, Response} from 'express'
import { enterpriseServices } from '../../services/enterprises'

export const enterpriseFindController =  {
  find: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const enterprise = await enterpriseServices.findOne(id)

      if(enterprise === null){
        return res.status(200).json({})
      } else {
        return res.status(200).json(enterprise)
      }
    } catch (error) {
      return res.status(500).json({"serverError": "Something wrent wrong. Try again in a few moments"})
    }
  }
}