import * as d3 from 'd3';
const height = 600;
const width = 600;
const julia = {

    createJuliaSVG: (node) => {
        /* draw();
        function draw() {


            var maxiterations = 100;


            // loadPixels();
           // for (var x = 0; x < width; x++) {
              //  for (var y = 0; y < height; y++) {

                    // set up the x scale
                    var xScale = d3.scaleLinear()
                        .domain([2, -2])
                        .range([height,0]); // actual length of axis

                    // set up the y scale
                    var yScale = d3.scaleLinear()
                        .domain([-2, 2])
                        .range([width, 0]);
                //  var ca = a;
                   // var cb = b;

               var a=-2;
               var b=.01;

                   for (var x = 0; x < 100; x++) {
                    for (var y = 0; y < 100; y++) {
            
                        
            
                        var ca = a;
                        var cb = b;
            
            
                        for (var n = 0; n < maxiterations; n++) {
                            var aa = a * a - b * b;  
                            var bb = 2 * a * b; 
                            a = aa + ca; 
                            b = bb + cb; 
                      //    alert('a: '+a);
//alert('b: '+b);


                            d3.select(node).append("circle")
                            .attr("cx", xScale(a))
                            .attr("cy", yScale(b))
                            .attr("r", 3)
                            //.attr("fill", "blue")
                           // .attr("stroke", "black");
    
    
                            if (Math.abs(a+b) >=4.1) {
                                alert("im here");
                                break;
                                
                            }
                            //n++;
                        }
                
                   // for (var n = 0; n < maxiterations; n++) {
                     //   var aa = a * a - b * b;
                      //  var bb = 2 * a * b;
                       // a = aa + ca;
                       // b = bb + cb;
                        //if (a * a + b * b > 16) {
                           // break;
                        //}
 //                   }
                    /////create circle here
                   
              //  }
           // }

    
                       }

        }
    }
*/




        /* 
        var x;
        var y;
        var a;
        var b;

        x=0;y=0;a=0;b=0;

                            // set up the x scale
                            var xScale = d3.scaleLinear()
                                .domain([2, -2])
                                .range([height,0]); // actual length of axis

                            // set up the y scale
                            var yScale = d3.scaleLinear()
                                .domain([-2, 2])
                                .range([width, 0]);

        var iterate=function(){
            var tmp=x*x-y*y+a;
            y=2*x*y+b;
            x=tmp;  
        };

        var iterateABunch=function(n){
            for(var i=0;i<n;i++){
                iterate();
            }
        };

        var drawXY=function(){
            d3.select(node).append("circle")
                                    .attr("cx", xScale(x))
                                    .attr("cy", yScale(y))
                                    .attr("r", 3)
        };
        var drawAB=function(){
            d3.select(node).append("circle")
                                    .attr("cx", xScale(a))
                                    .attr("cy", yScale(b))
                                    .attr("r", 3)
        };

        var iterateAndDraw=function(n){
            for(var i=0;i<n;i++){
                iterate();
                drawXY();
            }
            
        };
        var seriesDiverges=function(n){
            for(var i=0;i<n;i++){
                iterate();
                if(x*x+y*y>4.0){
                    return true;
                }
            }
            return false;
        };


        //textSize(20);
        //fill(0, 0, 0);

        //var textXY=function(xpos,ypos){
        //    text("("+x+", "+y+")",xpos,ypos);
        //};

        a=-2;
        b=-0.01;

        var stillDrawing=true;
        var draw= function() {
            if(stillDrawing){
                for(var i=0;i<100;i++){
                    a=a+0.01;
                    if(a>=2){
                        a=-2;
                        b+=0.01;
                    }
                    if(b>=2){
                        stillDrawing=false;
                    }
                    x=0;y=0;
                    if(seriesDiverges(40)){
                        drawAB();
                    }
                }
            }
        };



        draw();

        */

        /*

        let x = 0.0;
        let y = 0.0;
        let x0 = 0.45;
        let y0 = 0.1428;

        let iteration= 0;
        let max_iteration= 100;
        let xtemp;

        while (x * x + y * y < 2*2  || iteration < max_iteration) {
            xtemp = x*x - y*y + x0;
            y = 2*x*y + y0;
            x = xtemp;
            iteration = iteration + 1;


        var xScale = d3.scaleLinear()
        .domain([2, -2])
        .range([height,0]); // actual length of axis

        // set up the y scale
        var yScale = d3.scaleLinear()
        .domain([-2, 2])

        .range([width, 0]);

        d3.select(node).append("circle")
        .attr("cx", xScale(x))
        .attr("cy", yScale(y))
        .attr("r", 4)
        .attr("fill", "blue")

        }





        

        var xScale = d3.scaleLinear()
            .domain([2, -2])
            .range([height, 0]); // actual length of axis

        // set up the y scale
        var yScale = d3.scaleLinear()
            .domain([-2, 2])
            .range([width, 0]);

        function checkIfBelongsToMandelbrotSet(x, y) {
            var realComponentOfResult = x;
            var imaginaryComponentOfResult = y;
            var maxIterations = 100;
            for(var i = 0; i < maxIterations; i++) {
                 var tempRealComponent = realComponentOfResult * realComponentOfResult
                                         - imaginaryComponentOfResult * imaginaryComponentOfResult
                                         + x;
                 var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
                                         + y;
                 realComponentOfResult = tempRealComponent;
                 imaginaryComponentOfResult = tempImaginaryComponent;
        
                 // Return a number as a percentage
                 if(realComponentOfResult * imaginaryComponentOfResult > 5) 
                    return (i/maxIterations * 100);
            }
            return 0;   // Return zero i
        }

        var magnificationFactor = 1000;
        var panX = 2;
        var panY = 1.5;
        for (var x = 0; x < height; x++) {
            for (var y = 0; y < width; y++) {
                var belongsToSet =
                    checkIfBelongsToMandelbrotSet(x / magnificationFactor - panX,
                        y / magnificationFactor - panY);
                if (belongsToSet) {
                    d3.select(node).append('rect')
                        .attr("x", xScale(x))
                        .attr("y", yScale(y))
                        .attr("width", 10)
                        .attr("height", 10)
                        .attr("fill", "black"); // Draw a black pixel
                } else {

                    d3.select(node).append('rect')
                        .attr("x", xScale(x))
                        .attr("y", yScale(y))
                        .attr("width", 1)
                        .attr("height", 1)
                        .attr("fill", "blue"); // Draw a colorful 
                }
            }
        }



        // Draw a black pixel

        // d3.select(node).append('rect')
        //   .attr("x", xScale(x))
        // .attr("y", yScale(y))
        // .attr("width", 1)
        //.attr("height", 1)
        // .attr("fill", "white"); // Draw a colorful pixel



*/

var canvas = document.getElementsByClassName('canvas');
var context = canvas[0].getContext('2d');
var xr = context.canvas.width;
var yr = context.canvas.height;
var imgd = context.createImageData(xr, yr);
var pix = imgd.data;

var xmin = -2.0; var xmax = 1.0;
var ymin = -1.5; var ymax = 1.5;

// these are for coloring the image
var mr0 = 0; var mg0 = 0; var mb0 = 0;
while(mr0 === mg0 || mr0 === mb0 || mg0 === mb0) 
{
    mr0 = Math.pow(2, Math.ceil(Math.random() * 3 + 3));
    mg0 = Math.pow(2, Math.ceil(Math.random() * 3 + 3));
    mb0 = Math.pow(2, Math.ceil(Math.random() * 3 + 3)); 
}
var mr1 = 256 / mr0; var mg1 = 256 / mg0; var mb1 = 256 / mb0;

var maxIt = 256;
var x = 0.0; var y = 0.0;
var zx = 0.0; var zx0 = 0.0; var zy = 0.0;
var zx2 = 0.0; var zy2 = 0.0;

for (var ky = 0; ky < yr; ky++)
{
    y = ymin + (ymax - ymin) * ky / yr;
    for(var kx = 0; kx < xr; kx++)
    {
        x = xmin + (xmax - xmin) * kx / xr;
        zx = x; zy = y;
        for(var i = 0; i < maxIt; i++)
        {
            zx2 = zx * zx; zy2 = zy * zy;
            if(zx2 + zy2 > 4.0) break;
            zx0 = zx2 - zy2 + 0.285;
            zy = 2.0 * zx * zy + 0.01;
            zx = zx0;
        }
        var p = (xr * ky + kx) * 4;
        pix[p] = i % mr0 * mr1;     // red
        pix[p + 1] = i % mg0 * mg1; // green
        pix[p + 2] = i % mb0 * mb1; // blue
        pix[p + 3] = 255;           // alpha
    }
}

context.putImageData(imgd, 0, 0);

    }
}




export default julia;