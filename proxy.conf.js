const PROXY_CONFIG = [
  {
    context: ['/apiManga'],
    target: 'https://api.mangadex.org',
    secure: true,
    logLevel: 'debug',
    pathRewrite: {'^/apiManga': ''}
  }
]

module.exports = PROXY_CONFIG