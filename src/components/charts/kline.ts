import * as d3 from 'd3'

class Kline {
  public el: string
  public data: any
  public width: string
  public height: string
  constructor (options: any) {
    this.el = options.el
    this.data = options.data
    this.width = options.width || '100%'
    this.height = options.height || '100%'
    this.init()
  }

  public init () {
    var dataArr = [10, 20, 30]
    var dataHeight = 25
    d3.select(this.el)
      .append('svg')
      .attr('height', this.height)
      .attr('width', this.width)
  }
}

export default Kline
