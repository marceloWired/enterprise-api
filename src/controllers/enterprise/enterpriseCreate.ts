import { enterpriseServices } from '../../services/enterprises'
import { Request, Response } from 'express'

export const enterpriseCreateController = {
  store: async (req: Request, res: Response) => {
    try {
      const requiredFields = ['status', 'name', 'purpose', 'address']
    const requiredAddressFields = ['cep', 'city', 'district', 'street', 'number', 'state', 'formatedAddress']

    for(const field of requiredFields) {
      if(!req.body[field]){
        return res.status(400).json({"error": `Missing param: ${field}`})
      }
      if(field === 'address') {
        for(const addressField of requiredAddressFields) {
          if(!req.body.address[addressField]){
            return res.status(400).json({"error": `Missing param: address.${addressField}`})
          }
        }
      }
    }

    const { status, name, purpose, address } = req.body

    const enterpriseData = {
      status,
      name,
      purpose,
      address
    }

    const result = await enterpriseServices.create(enterpriseData)

    return res.status(201).json(result)

    } catch (error) {
      return res.status(500).json({ "serverError": "Something wrent wrong. Please try again in a few moments" })
    }
  } 
}
