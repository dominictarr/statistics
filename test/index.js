

var reduce = require('../')

var tape = require('tape')

tape('statistics as reduce', function (t) {

  var stats = [1,2,3].reduce(reduce)

  t.deepEqual(stats, {
    mean: 2,
    stdev: Math.sqrt((1*1+2*2+3*3)/3 - 2*2),

    sum: 1+2+3,
    count: 3,
    sqsum: 1*1+2*2+3*3
  })

  console.log(stats)

  t.end()
})
