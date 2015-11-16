
//
// caluclate simple statistics
//

module.exports = Stats

function Stats () {
  if (!(this instanceof Stats)) return new Stats()
  this.sum = 0
  this.sqsum = 0
  this.mean = 0
  this.count = 0
  this.max = null
  this.min = null
}

Stats.prototype = {
  value: function (val) {
    this.sum += val
    this.sqsum += val*val
    this.count ++
    this.mean = this.sum / this.count
    this.max = 
        this.max === null ? val 
      : val > this.max ? val
      : this.max 
    this.min = 
        this.min === null ? val 
      : val < this.min ? val
      : this.min 
    return this
  },
  get variance () {
    return this.sqsum / this.count - (this.mean * this.mean)
  },
  get stdev() {
    return Math.sqrt(this.variance)
  },
  toJSON: function () {
    return {mean: this.mean, count: this.count, stdev: this.stdev}
  }
}
