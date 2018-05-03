# May you never eat this bundle of shit

### 1. Why does tsconfig.json NEVER WORK!!! (TS absolute importing path setting issue)

- You will want tsconfig-paths-webpack-plugin!

### 2. Why is everything gone after I refresh my browser???

- You need to set a correct route middleware function for that.
- Refer to my server/index.js to figure it out.
- Plus, output/publicPath is **VERY ESSENTIAL**. Set that with `'/'` or something else, otherwise the page will be gone if the route is two or  more deeper. That is raised due to some weired behavior of node.js, which writes every file, js, css, etc., with an HTML content. That shit is sent to browser to bother you.

### 3. Why global "React" does not work with webpack.ProvidePlugin?

- You need to create a `d.ts` file that include this:
```ts
import _React from 'react';

declare global {
  const React: typeof _React;
}

```

### 4. Why NODE_ENV is still `undefined` even if I use the `webpack.DefinePlugin`???

- This is really a trick!!
- The DefinePlugin does not create a variable in your window or any global environment. It merely replace the text in your code???????!!!!!!
- Crap!!!!
```
This is because DefinePlugin doesn't build any object - it just replaces all occurrences of process.env.NODE_ENV in code with the constant you provided. In short, this works like find-and-replace variable with value :)
```
