import next from 'next';
import { dev as isDev, nextClientDir, nextConfig } from '../config/variables';
import Server, {
  ServerConstructor,
} from 'next/dist/next-server/server/next-server';
import { Context } from 'koa';

declare type NextServerConstructor = Omit<ServerConstructor, 'staticMarkup'> & {
  /**
   * Whether to launch Next.js in dev mode - @default false
   */
  dev?: boolean;
};

class NextMiddleware {
  private app: Server;

  constructor(app?: Server, options?: Partial<NextServerConstructor>) {
    const { dev = isDev, conf = nextConfig, dir = nextClientDir } =
      options ?? {};
    this.app =
      app ??
      next({
        dev,
        conf,
        dir,
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
