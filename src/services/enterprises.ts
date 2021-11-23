import { IEnterprise } from '../interfaces/'
import { IEnterpriseDTO } from '../DTO/enterpriseDTO'
import { Enterprise } from '../models/enterprise'

export const enterpriseServices = {
  create: async (addEnterprise: IEnterpriseDTO): Promise<IEnterprise> => {
    const createdAccount = await Enterprise.create(addEnterprise)

    return createdAccount
  }
}
