
export default () => ({
  isProduction: process.env.NODE_ENV === 'production',
  prefix: process.env.PREFIX || '',
  version: process.env.VERSION || '1.0.0',
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432
  },
  swagger: {
    host: process.env.SWAGGER_URL || 'swagger'
  }
})
