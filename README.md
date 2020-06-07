# nextjs-koa-middleware

NextJS koa middleware

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/cb4e12e4cefe4fb3aa1413ebcbf4261d)](https://www.codacy.com/manual/henriquecarv/nextjs-koa-middleware?utm_source=github.com&utm_medium=referral&utm_content=henriquecarv/nextjs-koa-middleware&utm_campaign=Badge_Grade)
[![CircleCI](https://img.shields.io/circleci/build/github/henriquecarv/nextjs-koa-middleware?token=678134f59ded57d800e7b52d0e2d22a0852f30bc)](https://circleci.com/gh/henriquecarv/nextjs-koa-middleware)
[![npm](https://img.shields.io/npm/v/nextjs-koa-middleware.svg)](https://www.npmjs.com/package/nextjs-koa-middleware)
[![npm](https://img.shields.io/npm/dt/nextjs-koa-middleware.svg)](https://www.npmjs.com/package/nextjs-koa-middleware)
[![LICENSE](https://img.shields.io/github/license/henriquecarv/nextjs-koa-middleware.svg)](./LICENSE)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=henriquecarv/nextjs-koa-middleware)](https://dependabot.com)

## System Requirements

- **[NodeJS](https://nodejs.org/en/)** (version >= 12).

## Installation

```sh
# npm
npm i nextjs-koa-middleware
# yarn
yarn add nextjs-koa-middleware
```

## Peer Dependency

- **[koa-router](https://github.com/koajs/router)** (version <= 8.0.8)

## Usage

- Define environment variables:

```sh
NODE_ENV=development

# Relative path to .next directory
NEXT_CLIENT_DIR=/
NEXT_CONFIG_PATH=/next.config.js
```

- Define NextJS Routes:

```typescript
import Router from 'koa-router';
import { handle, render, defaultReturn } from 'nextjs-koa-middleware';

const nextRouter = new Router();

nextRouter.use(defaultReturn());
nextRouter.get('/PagePath', render('pageComponentName'));
nextRouter.all('*', handleRoutes());

export default nextRouter;
```

- Start koa server:

```typescript
import koa from 'koa';
import nextRouter from './NextRouter';

const app = new Koa();
const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? 'localhost';

app.use(nextRouter.routes()).use(nextRouter.allowedMethods());
app.listen(port);

console.info(`listening on ${host}:${port}`);
```

- [Example Project](https://github.com/henriquecarv/bundle-size)

### License

Copylefted (c) 2020 [Henrique Carvalho da Cruz][1] Licensed under the [MIT license][2].

[1]: https://henriquecarv.com
[2]: ./LICENSE
