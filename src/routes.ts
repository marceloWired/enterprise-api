import { Router, Request, Response } from 'express'
import { enterpriseCreateController, enterpriseList } from './controllers/enterprise/'

const routes = Router()

routes.get('/enterprise', enterpriseList.listAll)

routes.post('/enterprise', enterpriseCreateController.store)

routes.put('/enterprise', (req: Request, res: Response) => {
  res.status(200).json({"message": "Should update an enterprise"})
})

routes.delete('/enterprise/:id', (req: Request, res: Response) => {
  res.status(200).json({"message": "Should delete an enterprise"})
})

export default routes
