import { existsSync, readFileSync } from 'node:fs'

const requiredFiles = [
  'index.html',
  'src/main.js',
  'src/styles.css',
  'server.js',
  'vercel.json',
  'public/_redirects',
]

const missingFiles = requiredFiles.filter((file) => !existsSync(file))

if (missingFiles.length > 0) {
  console.error(`Missing files: ${missingFiles.join(', ')}`)
  process.exit(1)
}

const html = readFileSync('index.html', 'utf8')
const js = readFileSync('src/main.js', 'utf8')

for (const route of ['/partners/maxos', '/partners/polytrade', '/partners/africa-trades']) {
  if (!js.includes(route)) {
    console.error(`Missing route config for ${route}`)
    process.exit(1)
  }
}

if (!html.includes('<div id="app"></div>')) {
  console.error('Missing app mount point')
  process.exit(1)
}

console.log('Partner frontend check passed.')
