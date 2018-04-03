import * as d3 from 'd3';

const line = {
   
  
    createLineSVG: (node) => {
    
      let lineGenerator = d3.line();
  
      let points = [
        [0, 80],
        [100, 100],
        [200, 30],
        [300, 50],
        [400, 40],
        [500, 80]
      ];
  
      let  pathData = lineGenerator(points);
  
      d3.select(node).append('path')
        .attr('d', pathData)
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none");
      
    }
  
  }

  export default line;