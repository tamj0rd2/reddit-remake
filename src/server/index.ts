import express from 'express'
import Bundler from 'parcel-bundler'
import { createApiRouter } from './api'
import { logoutHandler } from './logout'
import createMiddlewares from './middleware'
import { getServerConfig } from '~server/config'

const config = getServerConfig()
const bundler = new Bundler('src/client/index.html', {
  sourceMaps: process.env.NODE_ENV !== 'production',
})

const app = express()
app.use(createMiddlewares(config))
app.use('/logout', logoutHandler)
app.use('/api', createApiRouter())
app.use(bundler.middleware())
app.listen(config.PORT, () => {
  console.log(`Server listening on http://localhost:${config.PORT}`)
})
