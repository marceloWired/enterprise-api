import { Request, Response} from 'express'
import { enterpriseServices } from '../../services/enterprises'

export const enterpriseDeleteController =  {
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const enterprise = await enterpriseServices.delete(id)

      if(enterprise){
        return res.status(204).json({})
      }else {
        return res.status(404).json({"error": "enterprise not found"})
      }

    } catch (error) {
      return res.status(500).json({"serverError": "Something wrent wrong. Try again in a few moments"})
    }
  }
}