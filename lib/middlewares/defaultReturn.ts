import { Context, Next } from 'koa'

export default () => async (ctx: Context, next: Next) => {
  ctx.res.statusCode = 200
  await next()
}
