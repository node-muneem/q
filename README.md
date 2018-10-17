# mueem-q

Parser query string `req.queryStr` using [qs](https://www.npmjs.com/package/qs) npm package.

```js
const app = require('muneem')();
app.use(require('muneem-q'), globalOptions);

app.get('/', (req, res) => {
    req.q( options )
})

```