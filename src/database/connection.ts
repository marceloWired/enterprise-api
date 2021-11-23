import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL)
  } catch (error) {
    console.error(error)
  }
}
