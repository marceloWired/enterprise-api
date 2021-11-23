import express from 'express'
import { connectDatabase } from './database/connection'
import routes from './routes'

const app = express()
const PORT = 3002 || process.env.PORT

connectDatabase()
  .then(() => {  
    app.use(express.json())
    app.use(routes)
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch(console.error)
