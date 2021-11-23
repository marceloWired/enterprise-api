import { IEnterprise } from '../interfaces/'
import { IEnterpriseDTO } from '../DTO/enterpriseDTO'
import { Enterprise } from '../models/enterprise'
import { enterpriseMapper } from '../utils/enterpriseMapper'

export const enterpriseServices = {
  create: async (addEnterprise: IEnterpriseDTO): Promise<IEnterprise> => {
    const createdEnterprise = await Enterprise.create(addEnterprise)
    const { _id, ...enterpriseWithoutId } = createdEnterprise._doc

    return enterpriseMapper(enterpriseWithoutId, _id)
  },
  findAll: async (limit: number): Promise<IEnterprise[]> => {
    const queryResult = await Enterprise.find({}, null, { limit: limit})
    
    const enterpriseList = []

    queryResult.map((currentItem) => {
      const { _id, ...enterpriseWithoutId } = currentItem._doc

      const enterpriseWithId = enterpriseMapper(enterpriseWithoutId, _id)
     
      return enterpriseList.push(enterpriseWithId)
    })

    return enterpriseList  
  },
  findOne: async (id: string): Promise<IEnterprise> => {  
    return await Enterprise.findOne({_id: id})
  },
  delete: async (id: string): Promise<boolean> => {
    const { deletedCount } = await Enterprise.deleteOne({_id: id})

    if (deletedCount > 0) {
      return true
    } else {
      return false
    }    
  }
}
