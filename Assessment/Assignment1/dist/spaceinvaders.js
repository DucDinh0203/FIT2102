/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./spaceinvaders.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
function spaceinvaders() {
    // Inside this function you will use the classes and functions 
    // from rx.js
    // to add visuals to the svg element in pong.html, animate them, and make them interactive.
    // Study and complete the tasks in observable exampels first to get ideas.
    // Course Notes showing Asteroids in FRP: https://tgdwyer.github.io/asteroids/ 
    // You will be marked on your functional programming style
    // as well as the functionality that you implement.
    // Document your code!  
    const svg = document.getElementById('canvas'), player = document.getElementById('player');
    const rect = document.createElementNS(svg.namespaceURI, 'rect');
    Object.entries({
        x: 300, y: 500,
        width: 120, height: 80,
        fill: '#95B3D7',
    }).forEach(([key, val]) => rect.setAttribute(key, String(val)));
    svg.appendChild(rect);
}
// the following simply runs your pong function on window load.  Make sure to leave it in place.
if (typeof window != 'undefined')
    window.onload = () => {
        spaceinvaders();
    };

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VpbnZhZGVycy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLFNBQVMsYUFBYTtJQUNwQiwrREFBK0Q7SUFDL0QsYUFBYTtJQUNiLDJGQUEyRjtJQUMzRiwwRUFBMEU7SUFDMUUsK0VBQStFO0lBQy9FLDBEQUEwRDtJQUMxRCxtREFBbUQ7SUFDbkQsd0JBQXdCO0lBQ3hCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQ3ZDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxNQUFNLENBQUM7SUFDOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNiLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUc7UUFDZCxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3RCLElBQUksRUFBRSxTQUFTO0tBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNELEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUVELGdHQUFnRztBQUNoRyxJQUFJLE9BQU8sTUFBTSxJQUFJLFdBQVc7SUFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFFLEVBQUU7UUFDbEIsYUFBYSxFQUFFLENBQUM7SUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlaW52YWRlcnMvLi9zcGFjZWludmFkZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21FdmVudCwgaW50ZXJ2YWwsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNjYW4sIGZpbHRlciwgbWVyZ2UsIHRha2VVbnRpbCwgZmxhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZnVuY3Rpb24gc3BhY2VpbnZhZGVycygpIHtcbiAgLy8gSW5zaWRlIHRoaXMgZnVuY3Rpb24geW91IHdpbGwgdXNlIHRoZSBjbGFzc2VzIGFuZCBmdW5jdGlvbnMgXG4gIC8vIGZyb20gcnguanNcbiAgLy8gdG8gYWRkIHZpc3VhbHMgdG8gdGhlIHN2ZyBlbGVtZW50IGluIHBvbmcuaHRtbCwgYW5pbWF0ZSB0aGVtLCBhbmQgbWFrZSB0aGVtIGludGVyYWN0aXZlLlxuICAvLyBTdHVkeSBhbmQgY29tcGxldGUgdGhlIHRhc2tzIGluIG9ic2VydmFibGUgZXhhbXBlbHMgZmlyc3QgdG8gZ2V0IGlkZWFzLlxuICAvLyBDb3Vyc2UgTm90ZXMgc2hvd2luZyBBc3Rlcm9pZHMgaW4gRlJQOiBodHRwczovL3RnZHd5ZXIuZ2l0aHViLmlvL2FzdGVyb2lkcy8gXG4gIC8vIFlvdSB3aWxsIGJlIG1hcmtlZCBvbiB5b3VyIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgc3R5bGVcbiAgLy8gYXMgd2VsbCBhcyB0aGUgZnVuY3Rpb25hbGl0eSB0aGF0IHlvdSBpbXBsZW1lbnQuXG4gIC8vIERvY3VtZW50IHlvdXIgY29kZSEgIFxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyksXG4gICAgICAgIHBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKTtcbiAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmcubmFtZXNwYWNlVVJJLCdyZWN0JylcbiAgT2JqZWN0LmVudHJpZXMoe1xuICAgIHg6IDMwMCwgeTogNTAwLFxuICAgIHdpZHRoOiAxMjAsIGhlaWdodDogODAsXG4gICAgZmlsbDogJyM5NUIzRDcnLFxuICB9KS5mb3JFYWNoKChba2V5LHZhbF0pPT5yZWN0LnNldEF0dHJpYnV0ZShrZXksU3RyaW5nKHZhbCkpKVxuICBzdmcuYXBwZW5kQ2hpbGQocmVjdCk7XG4gIH1cbiAgXG4gIC8vIHRoZSBmb2xsb3dpbmcgc2ltcGx5IHJ1bnMgeW91ciBwb25nIGZ1bmN0aW9uIG9uIHdpbmRvdyBsb2FkLiAgTWFrZSBzdXJlIHRvIGxlYXZlIGl0IGluIHBsYWNlLlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJylcbiAgICB3aW5kb3cub25sb2FkID0gKCk9PntcbiAgICAgIHNwYWNlaW52YWRlcnMoKTtcbiAgICB9XG4gIFxuICAgIFxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=