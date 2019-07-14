[![Build Status](https://travis-ci.org/janjaali/xrange-generator.svg?branch=master)](https://travis-ci.org/janjaali/xrange-generator)

# xrange-generator
xrange-generator for JS

# Usage
Install package:

```
yarn add xrange-generator
```

Start xRanging and take care of the infinity produced by the generators if you provide no end-parameter.

```javascript
import xrange from 'xrange-generator';

xrange(); // -> [0, 1, 2, 3, 4, 5, ...]
xrange(40); // -> [40, 41, 42, ...]
xrange(40, undefined, 5); // -> [40, 45, 50, ...] 
xrange(5, 12, 3); // -> [5, 8, 11] 
xrange(100, 90, 3); // -> [100, 97, 94, 91] 
```

# Dev

## Lint
Based on eslint and extending the [Airbnb-Style Guide](https://github.com/airbnb/javascript). 

```
yarn run lint
```

## Test
By using [Jest](https://facebook.github.io/jest/)
    
```
yarn run test
```

## Build

```
yarn run build
```