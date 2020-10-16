import { RequestHandler } from 'express'
import { ServerConfig } from '~server/config'

export const createAuthMiddleware = (config: ServerConfig): RequestHandler => (req, res, next) => {
  const redirectToAuth = () => res.set('WWW-Authenticate', 'Basic realm="401"').sendStatus(401)

  if (!req.headers.authorization) return redirectToAuth()

  const token = req.headers.authorization.split(' ')[1]
  if (!token) return redirectToAuth()

  const [username, password] = Buffer.from(token, 'base64').toString().split(':')
  if (!username || !password) return redirectToAuth()

  const expectedPassword = config.ALLOWED_CREDENTIALS[username]
  if (!expectedPassword || expectedPassword !== password) return redirectToAuth()

  next()
}
