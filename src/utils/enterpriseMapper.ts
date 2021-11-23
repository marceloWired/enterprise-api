import { IEnterpriseDTO } from '../DTO/enterpriseDTO'
import { IEnterprise } from '../interfaces/'

export const enterPriseMapper = (enterpriseWithoutId: IEnterpriseDTO, id: string): IEnterprise => {  
  return Object.assign({}, enterpriseWithoutId, { id })
}