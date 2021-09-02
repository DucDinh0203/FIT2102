import { fromEvent, interval, } from 'rxjs';
import { map, scan, filter, merge, takeUntil, flatMap } from 'rxjs/operators';

function spaceinvaders() {
  // Inside this function you will use the classes and functions 
  // from rx.js
  // to add visuals to the svg element in pong.html, animate them, and make them interactive.
  // Study and complete the tasks in observable exampels first to get ideas.
  // Course Notes showing Asteroids in FRP: https://tgdwyer.github.io/asteroids/ 
  // You will be marked on your functional programming style
  // as well as the functionality that you implement.
  // Document your code!  
  const svg = document.getElementById('canvas'),
        player = document.getElementById('player');
  const rect = document.createElementNS(svg.namespaceURI,'rect')
  Object.entries({
    x: 300, y: 500,
    width: 120, height: 80,
    fill: '#95B3D7',
  }).forEach(([key,val])=>rect.setAttribute(key,String(val)))
  svg.appendChild(rect);
  }
  
  // the following simply runs your pong function on window load.  Make sure to leave it in place.
  if (typeof window != 'undefined')
    window.onload = ()=>{
      spaceinvaders();
    }
  
    

