const { NODE_ENV: nodeEnv, NEXT_CLIENT_DIR, NEXT_CONFIG_PATH } = process.env

import { cwd } from 'process'
import { join } from 'path'
const dev = nodeEnv !== 'production'
const nextClientDir = join(cwd(), NEXT_CLIENT_DIR ?? '/')
const nextConfigPath = join(cwd(), NEXT_CONFIG_PATH ?? '/next.config.js')
const nextConfig = require(nextConfigPath)

export { nextClientDir, dev, nextConfig }
