import { Router } from 'express'
import { healthCheckHandler } from './healthcheck'

export function createApiRouter(): Router {
  const router = Router()
  router.get('/healthcheck', healthCheckHandler)
  router.use((_, res) => {
    res.sendStatus(404)
  })
  return router
}
