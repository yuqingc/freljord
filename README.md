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

### Make production

1. Build & bundle everything in the `/dist/` directory
```
$ yarn run build
```

2. Start the Node.js server
```
$ yarn run prod
```

## Deployment

1. Build an image of docker
```
$ scripts/build-prod.sh
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

- [blueprint](https://github.com/yuqingc/freljord/blob/master/docs/blueprint.md) is a brief plan of the entire project

- [devlog](https://github.com/yuqingc/freljord/blob/master/docs/devlog) records developing progress

- [shit](https://github.com/yuqingc/freljord/blob/master/docs/shit.md) might offer you some advice which helps avoid annoying things while developing

- [todos](https://github.com/yuqingc/freljord/blob/master/docs/todos)

## Licenses

- This project is under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license. See [LICENSE](https://github.com/yuqingc/freljord/blob/master/LICENSE)
