# Code Conventions

Code style is checked by tslint with tslint.json. Here are some conventions about TypeScript importing conventions that tslint does not cover.

Any developers of this project should follow these rules.

## Module importing rules

### Rules

- Importing statement blocks of internal and external modules (in `node_modules/`) should be seperated with an empty line

- You don't have to order your importings by alphabet

- Importing statements of external modules must go before any internal modules

- Absolute path relative to the baseUrl, defined by `tsconfig.json`,  is recommended

- Don't use too deep relative parent path, eg., `../../something`, `../something`, which makes it hard to understand the code

### Examples

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
import React from 'react'; // external module importing should go to the beginning
```