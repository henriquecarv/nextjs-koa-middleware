import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

import init from './middlewares/init'
import defaultReturn from './middlewares/defaultReturn'
import handleRoutes from './middlewares/handleRoutes'
import render from './middlewares/render'

export { init, defaultReturn, handleRoutes, render }
