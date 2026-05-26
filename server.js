import { createReadStream, existsSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { createServer } from 'node:http'

const port = Number(process.env.PORT ?? 4173)
const root = process.cwd()

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
}

function resolvePath(urlPath) {
  const safePath = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '')
  const filePath = join(root, safePath)

  if (existsSync(filePath) && !filePath.endsWith('\\') && !filePath.endsWith('/')) {
    return filePath
  }

  return join(root, 'index.html')
}

createServer((request, response) => {
  const url = new URL(request.url ?? '/', `http://localhost:${port}`)
  const filePath = resolvePath(url.pathname === '/' ? '/index.html' : url.pathname)
  const extension = extname(filePath)

  response.writeHead(200, {
    'Content-Type': contentTypes[extension] ?? 'application/octet-stream',
  })

  createReadStream(filePath).pipe(response)
}).listen(port, () => {
  console.log(`Partner frontend running at http://localhost:${port}`)
})
