# D3 with React

## D3.js Tutorial - How to use D3.js with ReactJS

* <https://www.youtube.com/watch?v=s5F9xa3PFoM>
* <http://www.brightpointinc.com/2015-nfl-predictions/>
* Line chart: <https://observablehq.com/@d3/line-chart>
* Stacked area chart: <https://observablehq.com/@d3/stacked-area-chart?collection=@d3/d3-shape>
* Bind data to DOM element.
  * Updates the DOM
  * Math calculations
  * Transitions
* Why D3.JS?
  * More customization and interactivity in your graphs.
  * Huge online community to refer to for help.
  * A lot of examples online.
  * Robust
  * Widely used.
* Con
  * Could be time consuming just to create a simple graph, but if you take the time to learn it, you can do much, much more.
* How?
  * <SVG>
    * HTML container for defining path and shapes.
  * <G>
    * HTML container for SVG graphics
  * <PATH>
    * SVG element to define a shape.
  * <RECT>
    * creates rectangles.
  * D3.SCALE
    * fx that accepts input b/w domain and maps to output b/w range.
    * create x, y, height, and width of <rect>
  * D3.AXIS
    * fx that creates an axis generator for a given scale.
  * D3.LINE
    * we can use .x and .y functions to specify how line generator interprets array element.
    * line is the line generator
    * path = line(data)
* D3 + React
  * D3 lacks reusability and integration.
  * Chart updates also simplified using state changes and props.
  * Virtual DOM for selective rendering.
  * Responsiveness.
  * React updates the DOM
  * React creates the DOM elements.
  * D3 provides the math functions (scaling, creating axes, creating attributes for html elements, etc.)
  * D3 generates drawing instructions.
  