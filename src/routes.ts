import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/enterprises', (req: Request, res:Response) => {
  res.status(200).json({"message": "Should return a list of enterprises"})
})

routes.post('/enterprises', (req: Request, res: Response) => {
  res.status(200).json({"message": "Should create a new enterprise"})
})

routes.put('/enterprises', (req: Request, res: Response) => {
  res.status(200).json({"message": "Should update an enterprise"})
})

routes.delete('/enterprises/:id', (req: Request, res: Response) => {
  res.status(200).json({"message": "Should delete an enterprise"})
})

export default routes
