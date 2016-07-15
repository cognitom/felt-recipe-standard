# felt-recipe-standard

This is a standard recipe for [Felt](https://github.com/cognitom/felt).

```bash
$ npm install felt-recipe-standard
```

## Usage via CLI

```bash
$ felt --recipe standard --src public
```

## Usage via Express

```javascript
'use strict'
const
  express = require('express'),
  felt = require('felt'),
  recipe = require('felt-recipe-standard')

const
  app = express(),
  flavor = { src: 'public' }

app.use(felt(recipe, flavor))
app.use(express.static('public'))
app.listen(3000)
```
