import { IAddress } from './address'

export interface IEnterprise {
  id: string
  status: string
  name: string
  purpose: string
  address: IAddress
}
