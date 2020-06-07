import next from 'next';
import { dev, nextClientDir, nextConfig } from '../config/variables';
import Server from 'next/dist/next-server/server/next-server';
import { Context } from 'koa';

class NextMiddleware {
  private app: Server;

  constructor(app?: Server, isDev?: boolean, conf?: any, clientDir?: string) {
    this.app =
      app ??
      next({
        dev: isDev ?? dev,
        conf: conf ?? nextConfig,
        dir: clientDir ?? nextClientDir,
      });
    this.init();
  }

  public handle = () => async (ctx: Context) => {
    const nextHandle = this.app.getRequestHandler();
    nextHandle(ctx.req, ctx.res);
    ctx.respond = false;
  };

  public render = (componentName: string) => async (ctx: Context) => {
    await this.app.render(ctx.req, ctx.res, `/${componentName}`, ctx.params);
    ctx.respond = false;
  };

  private init = async () => {
    await this.app.prepare();
  };
}

const { handle, render } = new NextMiddleware();

export default NextMiddleware;

export { handle, render };
