import app from './init'
import { Context } from 'koa'

export default (handleComponent: string) => {
  return async (ctx: Context) => {
    await app().render(ctx.req, ctx.res, `/${handleComponent}`, {
      ...ctx.query,
      ...ctx.params,
    })
    ctx.respond = false
  }
}
