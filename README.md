# freljord
Personal site powered by Ryze

---

### Start

- For dev

```
$ yarn run start
```
This will start a Node.js server with Webpack Middleware

- Build

```
$ yarn run build
```
This will bundle everything in the /dist/ directory

### Docs
- [blueprint](https://github.com/yuqingc/freljord/blob/master/docs/blueprint.md) is a brief plan of the entire project
- [devlog](https://github.com/yuqingc/freljord/blob/master/docs/devlog) records developing progress
- [shit](https://github.com/yuqingc/freljord/blob/master/docs/shit.md) might offers you some advice which helps avoid annoying things while developing
- [todos](https://github.com/yuqingc/freljord/blob/master/docs/todos) 

### Code style conventions

Code style is checked by tslint with tslint.json. Here are some conventions about TypeScript importing conventions that tslint does not cover.

Any developers of this project should follow these rules:

- Importing statement blocks of inner and outer modules should be seperated with an empty line 
- You don't have to order your imports by alphabet
- Importing statements of outer modules must go before inner modules
- Absolute path relative to the baseUrl, defined by `tsconfig.json`,  is recommended
- Don't use too deep relative parent path, eg., `../../something`, `../something`, which makes it hard to understand the code

Here is an example 

- Good

```js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import sidebarRouterConfig, { ISidebarRouter } from 'utils/sidebarRouterConfig';
import Container from './Container';
import { Home } from 'components/home';
import NotFound from './NotFound';
```

- Don't do this

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from 'components/home'; // need an empty line 
import sidebarRouterConfig, { ISidebarRouter } from '../../utils/sidebarRouterConfig'; // too many `../`
import Container from './Container';
import NotFound from './NotFound';
import React from 'react'; // outer module import should go to the beginning
```
