import React, { Component } from 'react'
import styles from './index.css'
import d3 from 'd3'
import 'd3-zoom'

export default class Canvas extends Component {
  constructor(props){
    super(props)
    this.update = this.update.bind(this)
  }
  dottype(d) {
    d.x = +d.x;
    d.y = +d.y;
    return d;
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
  componentDidUpdate(){
    this.update()
  }
  // componentWillUnmount(){
  //   window.removeEventListener('resize', this.update)
  // }
  update() {
    let { width, height } = this.refs.canvas.getBoundingClientRect()
    let margin = {top: -5, right: -5, bottom: -5, left: -5}
    width = width - margin.left - margin.right
    height = height - margin.top - margin.bottom

    let zoom = d3.behavior.zoom()
        .scaleExtent([1, 10])
        .on("zoom", this.zoomed)

    let drag = d3.behavior.drag()
        .origin(function(d) { return d; })
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
        .attr("x1", function(d) { return d; })
        .attr("y1", 0)
        .attr("x2", function(d) { return d; })
        .attr("y2", height)

    container.append("g")
        .attr("class", styles.axis)
      .selectAll("line")
        .data(d3.range(0, height, 10))
      .enter().append("line")
        .attr("x1", 0)
        .attr("y1", function(d) { return d; })
        .attr("x2", width)
        .attr("y2", function(d) { return d; })

    let dots = [
      {x: 50, y: 100},
      {x: 100, y: 50},
      {x: 100, y: 200},
      {x: 200, y: 150}
    ]

    let dot = container.append("g")
        .attr("class", styles.dot)
      .selectAll("circle")
        .data(dots)
      .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .call(drag)
  }
  render() {
    return <div ref="canvas" className={styles.container}></div>
  }
}
