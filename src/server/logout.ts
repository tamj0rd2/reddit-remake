import { RequestHandler } from 'express'

export const logoutHandler: RequestHandler = (_, res) => {
  res.status(401).send('Logged out successfully :)')
}
