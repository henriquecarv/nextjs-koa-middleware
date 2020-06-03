import app from './init'
import { Context } from 'koa'

export default () => {
  const handle = app().getRequestHandler()

  return async (ctx: Context) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  }
}
