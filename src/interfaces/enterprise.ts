import { IAddress } from './address'

export interface IEnterprise {
  _id: string
  status: string
  name: string
  purpose: string
  address: IAddress
}