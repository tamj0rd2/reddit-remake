const WEB_HOST = process.env.WEB_HOST || 'http://localhost:8080'

module.exports = {
  standard: 'WCAG2AA',
  level: 'error',
  defaults: {
    timeout: 45000,
    wait: 3000,
    chromeLaunchConfig: {
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox'],
    },
    headers: {
      Authorization: `Basic ${Buffer.from(`username:password`).toString('base64')}`,
    },
  },
  urls: [WEB_HOST],
}
