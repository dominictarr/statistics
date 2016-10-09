module.exports = function reduce (acc, value) {
  //handle when called without initial
  if('number' === typeof acc)
    return reduce(reduce(null, acc), value)
  //set initial if initial was null
  else if(null == acc)
    return {
      mean: value,
      stdev: 0,

      count: 1,
      sum: value,
      sqsum: value*value
    }

  acc.sum = acc.sum + value
  acc.count = acc.count + 1
  var sq = value*value
  acc.sqsum = acc.sqsum + sq

  acc.mean = acc.sum/acc.count
  acc.stdev = Math.sqrt(acc.sqsum/acc.count - acc.mean*acc.mean)

  return acc
}

module.exports.initial = {
  mean: 0, stdev: 0,
  count: 0, sum: 0, sqsum: 0
}



