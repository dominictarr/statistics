
var vows = require('vows')
  , it = require('it-is')
  , Stats = require ('../')
vows.describe('stats').addBatch({
  'initialize': {
    topic: new Stats (),
    'zeros': it.has({
      max: null,
      min: null,
      mean: 0,
      stdDev: 0
    })
  },
  'sample': {
    topic: function() {
      var s = new Stats ()
      s.value(1)
      s.value(2)
      s.value(3)
      return s
    },
    '123': it.has({
      max: 3,
      min: 1,
      mean: 2,
      stdDev: 1.4142135623730951
    })
  }
}).export(module)