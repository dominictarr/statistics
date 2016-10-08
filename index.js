module.exports = function reduce (acc, value) {
  //handle when called without initial
  if('number' === typeof acc)
    return reduce(reduce(null, acc), value)
  //set initial if initial was null
  else if(null == acc)
    return {
      mean: value,
      sum: value,
      sqsum: value*value,
      count: 1,
      stdev: 0
    }

  var sum = acc.sum + value
  var count = acc.count + 1
  var sq = value*value

  var mean = sum/count
  var sqsum = acc.sqsum + sq

  return {
    //these values useful output
    mean: mean,
    stdev: Math.sqrt(sqsum/count - mean*mean),

    //these values needed to maintain state.
    count: count,
    sum: sum,
    sqsum: sqsum
  }
}








