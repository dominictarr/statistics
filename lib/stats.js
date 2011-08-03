
//
// caluclate simple statistics
//

module.exports = Stats

function Stats () {
  if (!(this instanceof Stats)) return new Stats()
  this.values = []
  this.sum = 0
  this.mean = 0
  this.max = null
  this.min = null
}

Stats.prototype = {
  value: function (val) {
    this.values.push(val)
    this.sum += val
    this.mean = this.sum / this.values.length
    this.max = 
        this.max === null ? val 
      : val > this.max ? val
      : this.max 
    this.min = 
        this.min === null ? val 
      : val < this.min ? val
      : this.min 
  },
  get variance () {
    var l = this.values.length
    var vari = 0
    while (l--) { //fastest kind of js loop
      vari += Math.pow(this.values[l] - this.mean, 2)
    }
    return vari
  },
  get stdDev() {
    return Math.sqrt(this.variance)
  },
  toString: function (){
    return [this.min, this.mean, this.stdDev, this.max].join('|')
  }
}
