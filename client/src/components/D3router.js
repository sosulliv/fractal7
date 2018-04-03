import circle from './drawings/circle';
import triangle  from './drawings/triangle';
import line from './drawings/line';
import cantor from './drawings/cantor';
import mandelbrot from './drawings/mandelbrot';
import julia from './drawings/julia';


const d3router = {

  main: (node, drawing) => {

    switch (drawing) {
      case 'line':
        line.createLineSVG(node);
        break;
      case 'circle':
        circle.createCircleSVG(node);
        break;
        case 'triangle':
        triangle.createTriangleSVG(node);
        break;
        case 'cantor':
        cantor.createCantorSVG(node);
        break;
        case 'mandelbrot':
        mandelbrot.createMandelbrotSVG(node);
        break;
        case 'julia':
        julia.createJuliaSVG(node);
        break;
      default:
        line.createLineSVG(node);
        break;
    }
  }
}
export default d3router;