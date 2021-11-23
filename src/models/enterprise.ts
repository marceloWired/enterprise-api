import { Schema, model } from 'mongoose'

const enterpriseSchema = new Schema({
  status: String,
  name: String,
  purpose: String,
  address: {
    cep: String,
    city: String,
    district: String,
    street: String,
    number: String,
    state: String,
    formatedAddress: String
  }
})

export const Enterprise = model('Enterprise', enterpriseSchema)
