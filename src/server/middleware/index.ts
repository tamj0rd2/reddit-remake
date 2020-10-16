import { createAuthMiddleware } from './auth'
import { ServerConfig } from '../config'
import { RequestHandler } from 'express'
import { createDevLoggingMiddleware, createProdLoggingMiddleware } from './logger'

export default function createMiddlewares(config: ServerConfig): RequestHandler[] {
  const middlewares: RequestHandler[] = []
  middlewares.push(config.IS_PROD_MODE ? createProdLoggingMiddleware() : createDevLoggingMiddleware())
  middlewares.push(createAuthMiddleware(config))
  return middlewares
}
