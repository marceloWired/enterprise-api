import { Router, Request, Response } from 'express'
import { enterpriseCreateController } from './controllers/enterprise/'

const routes = Router()

routes.get('/enterprise', (req: Request, res: Response) => {
  res.status(200).json({"message": "Should return a list of enterprises"})
})

routes.post('/enterprise', enterpriseCreateController.store)

routes.put('/enterprise', (req: Request, res: Response) => {
  res.status(200).json({"message": "Should update an enterprise"})
})

routes.delete('/enterprise/:id', (req: Request, res: Response) => {
  res.status(200).json({"message": "Should delete an enterprise"})
})

export default routes
