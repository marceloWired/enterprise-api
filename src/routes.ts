import { Router, Request, Response } from 'express'
import { enterpriseCreateController, enterpriseListController, enterpriseFindController, enterpriseDeleteController } from './controllers/enterprise/'

const routes = Router()

routes.get('/enterprises', enterpriseListController.listAll)

routes.get('/enterprises/:id',enterpriseFindController.find)

routes.post('/enterprises', enterpriseCreateController.store)

routes.delete('/enterprises/:id', enterpriseDeleteController.delete)

routes.put('/enterprises', (req: Request, res: Response) => {
  res.status(200).json({"message": "Should update an enterprise"})
})

export default routes
