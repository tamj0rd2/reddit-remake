import pino from 'pino'
import expressPinoLogger from 'express-pino-logger'
import { RequestHandler } from 'express'

export const getLoggerOptions = (): pino.LoggerOptions => ({
  level: 'debug',
  redact: ['req.headers.authorization'],
  timestamp: () => `,"timestamp":"${new Date().toISOString()}"`,
  prettyPrint: true,
  base: null,
})

export const createLogger = (): pino.Logger => pino(getLoggerOptions())

export const createProdLoggingMiddleware = (): expressPinoLogger.HttpLogger => expressPinoLogger(getLoggerOptions())

export const createDevLoggingMiddleware = (): RequestHandler => {
  const logger = createLogger()
  return (req, res, next) => {
    const logValues: Record<string, unknown> = {}
    if (req.url) logValues.url = req.url
    if (res.statusCode) logValues.statusCode = res.statusCode
    if (res.statusMessage) logValues.statusMessage = res.statusMessage

    logger.info(logValues, 'Request received')
    next()
  }
}
