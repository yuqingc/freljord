# freljord
Personal site powered by [Ryze](https://github.com/yuqingc/ryze)

---

## Quick start

### Get ready

- First and foremost, **[Ryze](https://github.com/yuqingc/ryze)** should be running in local

- Packages are installed with either [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/)

```
$ npm install
```

or
```
$ yarn
```

### Start development

- Start a Node.js server with Webpack Middleware

```
$ yarn run start
```

### Run production build

- Build & bundle everything in the `/dist/` directory & start server
```
$ make prod
```

- If you don't have *make utilities* installed
```
$ yarn run build && yarn run prod
```

## Deployment

1. Build an image of docker
```
$ make
```

2. Push image to remote docker image registry

```
// TODO: Create a repository
```

3. Deploy with K8s

```
// TODO: with Docker & Kubernetes
```

## Docs

- [conventions](https://github.com/yuqingc/freljord/blob/master/docs/conventions.md) contains code conventions you need to know before developing

- [roadmap](https://github.com/yuqingc/freljord/blob/master/docs/roadmap.md) is a brief plan of the entire project

- [devlog](https://github.com/yuqingc/freljord/blob/master/docs/devlog) records developing progress

- [traps](https://github.com/yuqingc/freljord/blob/master/docs/traps.md) might offer you some advice which helps avoid annoying things while developing

- [todos](https://github.com/yuqingc/freljord/blob/master/docs/todos)

## Contributing

### [Code of Conduct](https://github.com/yuqingc/freljord/blob/master/docs/CODE_OF_CONDUCT.md)

### [Contributing Guide](https://github.com/yuqingc/freljord/blob/master/docs/CONTRIBUTING.md)
- // TODO

## Licenses

- This project is under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license. See [LICENSE](https://github.com/yuqingc/freljord/blob/master/LICENSE)
