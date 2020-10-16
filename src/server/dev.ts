import TscWatchClient from 'tsc-watch/client'
import { spawn, ChildProcess } from 'child_process'

const watch = new TscWatchClient()
let child: ChildProcess

watch.on('success', () => {
  const indexJsPath = './out/server/index.js'
  if (child) child.kill()
  child = spawn('node', ['-r', 'module-alias/register', '-r', 'source-map-support/register', indexJsPath], {
    stdio: 'inherit',
  })
})

watch.on('compile_errors', () => {
  if (child) child.kill()
})

watch.start('-b', './src/server/tsconfig.dev.json')
