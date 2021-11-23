import { IEnterprise } from '../interfaces/'
import { IEnterpriseDTO } from '../DTO/enterpriseDTO'
import { Enterprise } from '../models/enterprise'
import { enterPriseMapper } from '../utils/enterpriseMapper'

export const enterpriseServices = {
  create: async (addEnterprise: IEnterpriseDTO): Promise<IEnterprise> => {
    const createdEnterprise = await Enterprise.create(addEnterprise)
    const { _id, ...enterpriseWithoutId } = createdEnterprise._doc

    return enterPriseMapper(enterpriseWithoutId, _id)
  },
  findAll: async (limit: number): Promise<IEnterprise[]> => {
    const queryResult = await Enterprise.find({}, null, { limit: limit})
    
    const enterpriseList = []

    queryResult.map((currentItem) => {
      const { _id, ...enterpriseWithoutId } = currentItem._doc

      const enterpriseWithId = enterPriseMapper(enterpriseWithoutId, _id)
     
      return enterpriseList.push(enterpriseWithId)
    })

    return enterpriseList  
  }
}
