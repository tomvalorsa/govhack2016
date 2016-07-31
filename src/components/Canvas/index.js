import React, { Component } from 'react'
import styles from './index.css'
import d3 from 'd3'
import 'd3-zoom'
import _ from 'lodash'

export default class Canvas extends Component {
  constructor(props){
    super(props)
    this.update = this.update.bind(this)
  }
  zoomed = () => {
    // this.zoom.translate(panLimit());
    this.container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }
  // panLimit = () => {
  //   let divisor = {h: this.height / ((y.domain()[1]-y.domain()[0])*zoom.scale()), w: this.width / ((x.domain()[1]-x.domain()[0])*zoom.scale())},
  //     minX = -(((x.domain()[0]-x.domain()[1])*zoom.scale())+(panExtent.x[1]-(panExtent.x[1]-(width/divisor.w)))),
  //     minY = -(((y.domain()[0]-y.domain()[1])*zoom.scale())+(panExtent.y[1]-(panExtent.y[1]-(height*(zoom.scale())/divisor.h))))*divisor.h,
  //     maxX = -(((x.domain()[0]-x.domain()[1]))+(panExtent.x[1]-panExtent.x[0]))*divisor.w*zoom.scale(),
  //     maxY = (((y.domain()[0]-y.domain()[1])*zoom.scale())+(panExtent.y[1]-panExtent.y[0]))*divisor.h*zoom.scale(), 
  
  //     tx = x.domain()[0] < panExtent.x[0] ? 
  //         minX : 
  //         x.domain()[1] > panExtent.x[1] ? 
  //           maxX : 
  //           zoom.translate()[0],
  //     ty = y.domain()[0]  < panExtent.y[0]? 
  //         minY : 
  //         y.domain()[1] > panExtent.y[1] ? 
  //           maxY : 
  //           zoom.translate()[1];
    
  //   return [tx,ty];
  // }
  dragstarted(d) {
    d3.event.sourceEvent.stopPropagation();
    d3.select(this).classed(styles.dragging, true);
  }
  dragged(d) {
    console.log("dragged", d, d3.event.x, d3.event.y)
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
    let { sa3s, points } = this.props
    console.log("update", this.props)
    let { width, height } = this.refs.canvas.getBoundingClientRect()
    let margin = {top: -5, right: -5, bottom: -5, left: -5}
    width = this.width = width - margin.left - margin.right
    height = this.height = height - margin.top - margin.bottom

    let panExtent = { x: [0,width], y: [0,height] }

    // let x = d3.scale.linear()
    //   .domain(panExtent.x)
    //   .range([0, width]);
  
    // let y = d3.scale.linear()
    //   .domain(panExtent.y)
    //   .range([height, 0]);

    let zoom = this.zoom = d3.behavior.zoom()
        // .x(x)
        // .y(y)
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
        .scale(2000);

    let path = d3.geo.path()
      .projection(projection);

    container.selectAll("path")
        .data(sa3s.data)
      .enter().append("path")
        .attr("d", path)
        .attr("class", styles.geometry)
        .attr("fill", 'none')
        .attr("stroke", 'black')

    //point logic here

    Object.keys(points.data).forEach(key => {
      console.log("style", styles[key])
      container.selectAll("path")
          .data(points.data[key])
        .enter().append("path")
          .attr("d", path)
          .attr("class", `${styles.point} ${styles[key]}`)
    })
  }
  render() {
    return <div ref="canvas" className={styles.container}></div>
  }
}
