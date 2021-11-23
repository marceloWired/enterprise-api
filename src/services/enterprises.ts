import { IEnterprise } from '../interfaces/'
import { IEnterpriseDTO } from '../DTO/enterpriseDTO'
import { Enterprise } from '../models/enterprise'

export const enterpriseServices = {
  create: async (addEnterprise: IEnterpriseDTO): Promise<IEnterprise> => {
    return await Enterprise.create(addEnterprise)

  },
  findAll: async (limit: number): Promise<IEnterprise[]> => {
    return await Enterprise.find({}, null, { limit: limit})
  }
}
