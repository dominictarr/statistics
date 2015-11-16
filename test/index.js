
var tape = require('tape')
  , Stats = require ('../')

tape('mean', function (t) {

  var s = Stats()
  s.value(1).value(2)
  t.equal(s.mean, 1.5)
  t.equal(s.min, 1)
  t.equal(s.max, 2)
  t.end()

})

tape('stdev', function (t) {

  var s = Stats()
  s.value(1).value(2).value(3)
  t.equal(s.mean, 2)
  t.equal(s.min, 1)
  t.equal(s.max, 3)
  //sum of squares
  t.equal(s.sqsum, 1*1+2*2+3*3)
  //calculate stdev: (sqsum/n - mean^2)

  var stdev = Math.sqrt((1*1+2*2+3*3)/3 - 2*2)
  t.equal(s.stdev, stdev)

  t.deepEqual(s.toJSON(), {mean: 2, count: 3, stdev: stdev})
  t.end()

})



