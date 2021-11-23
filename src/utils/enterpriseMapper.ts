import { IEnterpriseDTO } from '../DTO/enterpriseDTO'
import { IEnterprise } from '../interfaces/'

export const enterPriseMapper = (enterpriseWithoutId: IEnterpriseDTO, id: string): IEnterprise => {
  console.log(Object.assign({}, enterpriseWithoutId, { id }))
  
  return Object.assign({}, enterpriseWithoutId, { id })
}