import * as d3 from 'd3';




const circle = {

    createCircleSVG: (node) => {
        var canvas = document.getElementsByClassName('canvas');
        var context = canvas[0].getContext('2d');
   /// var xr = context.canvas.width;
      //  var yr = context.canvas.height;
        draw(600, 300, 300)



        function draw(x, y, d) {
            /// d3.select(node).append("circle")
            //  .attr("cx", x)
            // .attr("cy", y)
            //.attr("r", d)
            //.attr("fill", "none")
            //.attr("stroke", "black");
            //Drawing a circle
            context.strokeStyle="#000000";
            //context.fillStyle="#FFFFFF";
            context.fillStyle = 'rgba(0, 0, 0, 0)';
            context.beginPath();
            //context.arc(x-center, y-center, radius, startAngle, endAngle, counterclockwise)
            //A circle would thus look like:
            context.arc(x, y, d/2, 0, 2 * Math.PI, true);
            context.fill();
            context.stroke();
            context.closePath();
            if (d > 30) {

                draw(x + d / 1.5, y, d / 1.5);
                draw(x - d / 1.5, y, d / 1.5);

            }
        }
    }
}


export default circle;