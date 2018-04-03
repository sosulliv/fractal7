import * as d3 from 'd3';



const cantor = {


    createCantorSVG: (node) => {



        cantor(350, 100, 600);
        
    


        function cantor(x, y, len) {
            
            var h = 30;

            var canvas = document.getElementsByClassName('canvas');
            var context = canvas[0].getContext('2d');
           
            
            // recursive exit condition
            if (len >= 1) {
                
                // Draw line (as rectangle to make it easier to see)
                context.rect(x,y,len,20);
                //context.fillStyle = 'rgba(0, 0, 0, 0)';
                context.fill();
                context.stroke();
              //  d3.select(node).append('rect')
                //.attr("x", x)
                //.attr("y", y)
                //.attr("width", len)
                //.attr("height", 20);


                
                // Go down to next y position
                y += h;
                // Draw 2 more lines 1/3rd the length (without the middle section)
                cantor(x, y, len / 3);
                cantor(x + len * 2 / 3, y, len / 3);





            }
        }





    }
}

export default cantor;