import express from 'express'

const app = express()
const PORT = 3002 || process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

