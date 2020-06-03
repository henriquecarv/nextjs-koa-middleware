# nextjs-koa-middleware

NextJS koa middleware

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

- Use the [deafultReturn()](./lib/middlewares/defaultReturn.ts) as early as possible after starting a koa instance:

```typescript
import koa from 'koa'
import { defaultReturn } from 'nextjs-koa-middleware'

const app = new koa()

app.use(defaultReturn())
```

- Default NextJS Routes:

```typescript
import Router from 'koa-router'
import { handleRoutes } from 'nextjs-koa-middleware'

const nextRouter = new Router()

nextRouter.all('*', handleRoutes())

export default nextRouter
```

- Custom NextJS Routes:

```typescript
import Router from 'koa-router'
import { render } from 'nextjs-koa-middleware'

const customRoute = new Router()

customRoute.get('/custom-path', render('pageComponentName'))

export default customRoute
```

### License

Copylefted (c) 2020 [Henrique Carvalho da Cruz][1] Licensed under the [MIT license][2].

[1]: https://henriquecarv.com
[2]: ./LICENSE
