
# statistics

calculate mean and standard deviation in one pass.

## example

``` js
var Stats = require('statistics')
var s = Stats()

s.value(1).value(2).value(3)

console.log('mean:', s.mean, 'stdev:', s.stdev)
> mean: 2 stdev: 0.86...
```

It's possible to output values as you go.
Since `stdev` is calculated in one pass,
this has minimal memory commitments so you can take averages of everything.

