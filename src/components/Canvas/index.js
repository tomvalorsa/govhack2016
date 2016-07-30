import React, { Component } from 'react'
import styles from './index.css'
import d3 from 'd3'
import 'd3-zoom'

export default class Canvas extends Component {
  constructor(props){
    super(props)
    this.update = this.update.bind(this)
  }
  zoomed = () => {
    this.container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }
  dragstarted(d) {
    d3.event.sourceEvent.stopPropagation();
    d3.select(this).classed(styles.dragging, true);
  }
  dragged(d) {
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
  }
  dragended(d) {
    d3.select(this).classed(styles.dragging, false);
  }
  componentDidMount(){
    this.update()
    // window.addEventListener('resize', this.update)
  }
  // componentDidUpdate(){
  //   this.update()
  // }
  // componentWillUnmount(){
  //   window.removeEventListener('resize', this.update)
  // }
  update() {
    let { sa3s } = this.props
    console.log("sa3s", sa3s)
    let { width, height } = this.refs.canvas.getBoundingClientRect()
    let margin = {top: -5, right: -5, bottom: -5, left: -5}
    width = width - margin.left - margin.right
    height = height - margin.top - margin.bottom

    let zoom = d3.behavior.zoom()
        .scaleExtent([1, 10])
        .on("zoom", this.zoomed)

    let drag = d3.behavior.drag()
        .origin(d => d)
        .on("dragstart", this.dragstarted)
        .on("drag", this.dragged)
        .on("dragend", this.dragended)

    let svg = d3.select(this.refs.canvas).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
        .call(zoom);

    let rect = svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        .style("pointer-events", "all")

    let container = this.container = svg.append("g")

    container.append("g")
        .attr("class", styles.axis)
      .selectAll("line")
        .data(d3.range(0, width, 10))
      .enter().append("line")
        .attr("x1", d => d)
        .attr("y1", 0)
        .attr("x2", d => d)
        .attr("y2", height)

    container.append("g")
        .attr("class", styles.axis)
      .selectAll("line")
        .data(d3.range(0, height, 10))
      .enter().append("line")
        .attr("x1", 0)
        .attr("y1", d => d)
        .attr("x2", width)
        .attr("y2", d => d)

    let projection = this.projection = d3.geo.mercator()
        .center([151.14693174483754, -33.90825257141242])
        .translate([width / 2, height / 2])
        .scale(1000);

    let path = d3.geo.path()
      .projection(projection);

    container.selectAll("path")
        .data(sa3s.data)
      .enter().append("path")
        .attr("d", path)
        .attr("fill", 'none')
        .attr("stroke", 'black')
  }
  render() {
    return <div ref="canvas" className={styles.container}></div>
  }
}
