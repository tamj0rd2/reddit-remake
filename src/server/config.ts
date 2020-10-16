export interface ServerConfig {
  PORT: number
  ALLOWED_CREDENTIALS: Record<string, string>
  IS_PROD_MODE: boolean
}

export const getServerConfig = (): ServerConfig => {
  if (!process.env.PORT) throw new Error('No port!')

  return {
    PORT: parseInt(process.env.PORT),
    ALLOWED_CREDENTIALS: {
      username: 'password',
    },
    IS_PROD_MODE: process.env.NODE_ENV === 'production',
  }
}
