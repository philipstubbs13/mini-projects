import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart'
import './App.css';

function App() {
  useEffect(() => {
    d3.select(".myDiv").style('border', '1px solid red');

    d3.select(".myList")
      .append("li")
      .text("bananas")

    const temperatureData = [ 8, 5, 13, 9, 12 ]
    d3.select(".temperatures")
        .selectAll("h2")
        .data(temperatureData)
        .enter()
            .append("h2")
            .text((datapoint) => datapoint + " degrees")
            .attr("class", (datapoint) => datapoint > 10 ? 'highTemperature' : 'lowTemperature' )   

    d3.selectAll("p")
      .style("color", function() {
          return "hsl(" + Math.random() * 360 + ",100%,50%)";
      }
    );

    d3.select(".descr")
      .transition()
      .style("background-color", "red");

    // d3.selectAll("circle").transition()
    //   .duration(750)
    //   .delay((dataPoint, iteration) => iteration * 10)
    //   .attr("r", (dataPoint) => Math.sqrt(d * scale))
  }, [])
  return (
    <div className="myDiv">
      <ol className="myList"></ol>
      <div className="temperatures"></div>
      <p className="descr">Hello There</p>
      <BarChart />
    </div>
  );
}

export default App;
