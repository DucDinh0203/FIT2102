"use strict";
/*
Complete the following table when you submit this file:

Surname     | Firstname | email | Contribution% | Any issues?
=============================================================
Person 1... |           |       | 25%           |
Person 2... |           |       | 25%           |
Person 3... |           |       | 25%           |
Person 4... |           |       | 25%           |

complete Worksheet 4/5 by entering code in the places marked below...
*/
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
// Simple demonstration 
// ===========================================================================================
// ===========================================================================================
/**
 * an example of traditional event driven programming style - this is what we are
 * replacing with observable.
 * The following adds a listener for the mouse event
 * handler, sets p and adds or removes a highlight depending on x position
 */
function mousePosEvents() {
    const pos = document.getElementById("pos");
    document.addEventListener("mousemove", ({ clientX, clientY }) => {
        const p = clientX + ', ' + clientY;
        pos.innerHTML = p;
        if (clientX > 400) {
            pos.classList.add('highlight');
        }
        else {
            pos.classList.remove('highlight');
        }
    });
}
/**
 * constructs an Observable event stream with three branches:
 *   Observable<x,y>
 *    |- set <p>
 *    |- add highlight
 *    |- remove highlight
 */
function mousePosObservable() {
    const pos = document.getElementById("pos"), o = rxjs_1.fromEvent(document, "mousemove")
        .pipe(operators_1.map(({ clientX, clientY }) => ({ x: clientX, y: clientY })));
    o.pipe(operators_1.map(({ x, y }) => `${x},${y}`))
        .subscribe((s) => pos.innerHTML = s);
    o.pipe(operators_1.filter(({ x }) => x > 400))
        .subscribe(_ => pos.classList.add('highlight'));
    o.pipe(operators_1.filter(({ x }) => x <= 400))
        .subscribe(({ x, y }) => {
        pos.classList.remove('highlight');
    });
}
// Exercise 5
// ===========================================================================================
// ===========================================================================================
function piApproximation() {
    // a simple, seedable, pseudo-random number generator
    class RNG {
        constructor(seed) {
            // LCG using GCC's constants
            this.m = 0x80000000; // 2**31
            this.a = 1103515245;
            this.c = 12345;
            this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
        }
        nextInt() {
            this.state = (this.a * this.state + this.c) % this.m;
            return this.state;
        }
        nextFloat() {
            // returns in range [0,1]
            return this.nextInt() / (this.m - 1);
        }
    }
    const resultInPage = document.getElementById("value_piApproximation"), canvas = document.getElementById("piApproximationVis");
    if (!resultInPage || !canvas) {
        console.log("Not on the observableexamples.html page");
        return;
    }
    // an instance of the Random Number Generator with a specific seed
    const rng = new RNG(20);
    // return a random number in the range [-1,1]
    const nextRandom = () => rng.nextFloat() * 2 - 1;
    // you'll need the circleDiameter to scale the dots to fit the canvas
    const circleRadius = Number(canvas.getAttribute("width")) / 2;
    // test if a point is inside a unit circle
    const inCircle = ({ x, y }) => (x * x) + (y * y) <= 1;
    // you'll also need to set innerText with the pi approximation
    resultInPage.innerText = "...Update this text to show the Pi approximation...";
    // Your code starts here!
    // =========================================================================================
    function createDot(point) {
        if (!canvas)
            throw "Couldn't get canvas element!";
        const dot = document.createElementNS(canvas.namespaceURI, "circle");
        //const x = 50, y = 50; // all points are at 50,50!
        // Set circle properties
        const x = ((point.x + 1) * circleRadius), y = ((point.y + 1) * circleRadius);
        const colour = point.colour;
        dot.setAttribute("cx", String(x));
        dot.setAttribute("cy", String(y));
        dot.setAttribute("r", "5");
        dot.setAttribute("fill", point.colour); // All points red
        // Add the dot to the canvas
        canvas.appendChild(dot);
    }
    // A stream of random numbers
    const randomNumberStream = rxjs_1.interval(50).pipe(operators_1.map(_ => ({ x: nextRandom(), y: nextRandom() })), operators_1.map(point => ({ x: point.x, y: point.y, color: inCircle(point) ? "green" : "red" })));
    randomNumberStream.subscribe(createDot);
    randomNumberStream.subscribe(console.log);
    // Exercise 6
    // ===========================================================================================
    // ===========================================================================================
    /**
     * animates an SVG rectangle, passing a continuation to the built-in HTML5 setInterval function.
     * a rectangle smoothly moves to the right for 1 second.
     */
    function animatedRectTimer() {
        // get the svg canvas element
        const svg = document.getElementById("animatedRect");
        // create the rect
        const rect = document.createElementNS(svg.namespaceURI, 'rect');
        Object.entries({
            x: 100, y: 70,
            width: 120, height: 80,
            fill: '#95B3D7',
        }).forEach(([key, val]) => rect.setAttribute(key, String(val)));
        svg.appendChild(rect);
        const animate = setInterval(() => rect.setAttribute('x', String(1 + Number(rect.getAttribute('x')))), 10);
        const timer = setInterval(() => {
            clearInterval(animate);
            clearInterval(timer);
        }, 1000);
    }
    /**
     * Demonstrates the interval method
     * You want to choose an interval so the rectangle animates smoothly
     * It terminates after 1 second (1000 milliseconds)
     */
    function animatedRect() {
        // Your code starts here!
        // =========================================================================================
        // ...
        // get the svg canvas element
        const svg = document.getElementById("animatedRect");
        // create the rect
        const rect = document.createElementNS(svg.namespaceURI, 'rect');
        Object.entries({
            x: 100, y: 70,
            width: 120, height: 80,
            fill: '#95B3D7',
        }).forEach(([key, val]) => rect.setAttribute(key, String(val)));
        svg.appendChild(rect);
        function updateRect() {
            (rect.setAttribute('x', String(1 + Number(rect.getAttribute('x')))));
            console.log(rect.getAttribute('x'));
        }
        // below is the observable
        const obs = rxjs_1.interval(10).pipe(operators_1.take(200));
        obs.subscribe(updateRect);
    }
    // Exercise 7
    // ===========================================================================================
    // ===========================================================================================
    /**
     * Create and control a rectangle using the keyboard! Use only one subscribe call and not the interval method
     * If statements
     */
    function keyboardControl() {
        // get the svg canvas element
        const svg = document.getElementById("moveableRect");
        // Your code starts here!
        // =========================================================================================
        // ...
        const rect = document.createElementNS(svg.namespaceURI, 'rect');
        Object.entries({
            x: 100, y: 70,
            width: 120, height: 80,
            fill: '#95B3D7',
        }).forEach(([key, val]) => rect.setAttribute(key, String(val)));
        svg.appendChild(rect);
        const key$ = rxjs_1.fromEvent(document, "keydown");
        const keyW = key$.pipe(operators_1.filter(x => x.key === "w"), operators_1.map((_) => rect.setAttribute('y', String(-10 + Number(rect.getAttribute('y'))))));
        const keyA = key$.pipe(operators_1.filter(x => x.key === "a"), operators_1.map((_) => rect.setAttribute('x', String(-10 + Number(rect.getAttribute('x'))))));
        const keyS = key$.pipe(operators_1.filter(x => x.key === "s"), operators_1.map((_) => rect.setAttribute('y', String(10 + Number(rect.getAttribute('y'))))));
        const keyD = key$.pipe(operators_1.filter(x => x.key === "d"), operators_1.map((_) => rect.setAttribute('x', String(10 + Number(rect.getAttribute('x'))))));
        const allkeys = keyW.pipe(operators_1.merge(keyA, keyS, keyD)).subscribe();
    }
    // Running the code
    // ===========================================================================================
    // ===========================================================================================
    document.addEventListener("DOMContentLoaded", function (event) {
        piApproximation();
        // compare mousePosEvents and mousePosObservable for equivalent implementations
        // of mouse handling with events and then with Observable, respectively.
        //mousePosEvents();
        mousePosObservable();
        animatedRectTimer();
        // replace the above call with the following once you have implemented it:
        //animatedRect()
        keyboardControl();
    });
}
//# sourceMappingURL=observableexamples.js.map