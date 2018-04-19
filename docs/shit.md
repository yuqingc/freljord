# May you never eat this bundle of shit

### 1. Why does tsconfig.json NEVER WORK!!! (TS absolute importing path setting issue)

- You will want tsconfig-paths-webpack-plugin!

### 2. Why is everything gone after I refresh my browser???

- You need to set a correct route middleware function for that.
- Refer to my server/index.js to figure it out.
- Plus, output/publicPath is **VERY ESSENTIAL**. Set that with `'/'` or something else, otherwise the page will be gone if the route is two or  more deeper. That is raised due to some weired behavior of node.js, which writes every file, js, css, etc., with an HTML content. That shit is sent to browser to bother you.
