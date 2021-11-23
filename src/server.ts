import express from 'express'
import { connectDatabase } from './database/connection'
import routes from './routes'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3002  
 
connectDatabase()
  .then(() => {  
    app.use(cors())
    app.use(express.json())
    app.use(routes)
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch(console.error)
