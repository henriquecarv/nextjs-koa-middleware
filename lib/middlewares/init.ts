import next from 'next'
import { dev, nextClientDir, nextConfig } from '../config/variables'

export default () => {
  const app = next({ dev, dir: nextClientDir, conf: nextConfig })

  const init = async () => {
    await app.prepare()
  }

  init()

  return app
}
