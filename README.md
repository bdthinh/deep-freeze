# deep-freeze

Create a deep frozen object and not mutate input object

# example

``` js
const deepFreeze = require('deep-freeze');

const input = [1, 2, { x: 1, y: { z: 2 } }];

deepFreeze(input);
```

# license

ISC
