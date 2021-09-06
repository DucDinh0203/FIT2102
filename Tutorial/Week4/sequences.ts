/* 
Complete the following table when you submit this file:

Surname     | Firstname | email | Contribution% | Any issues?
=============================================================
Person 1... |           |       | 25%           |
Person 2... |           |       | 25%           |
Person 3... |           |       | 25%           |
Person 4... |           |       | 25%           |

complete Worksheet 4 by entering code in the places marked below...

For full instructions and tests open the file worksheetChecklist.html
in Chrome browser.  Keep it open side-by-side with your editor window.
You will edit this file (main.ts), save it, and reload the 
browser window to run the test. 
*/

/*
    Exercise 1 - General Purpose infinite sequence function
 */

interface LazySequence<T>{
    value: T;
    next(): LazySequence<T>;
}
//implement the function: 
function initSequence<T>(transform: (value: T) => T) : (initialValue: T) => LazySequence<T> {
    // Your code here ...
    return function _next(initialValue:T): LazySequence<T>{
        return {
            value: initialValue,
            next: ()=>_next(transform(initialValue))
        }
    }

} 

/*
    Exercise 2
 */
function map<T,V>(func: (v: T)=>V, seq: LazySequence<T>): LazySequence<V> {
    // Your code here ...
    return {
        value: func(seq.value),
        next: ()=>map(func,seq.next())
        }
    }

function filter<T>(func: (v: T) => boolean, seq: LazySequence<T>): LazySequence<T> {
    //if existing value, next value will be applied the func; otherwise, to the next value of the seq
    return func(seq.value) ? {
        value:seq.value,
        next:() => filter(func,seq.next())
    }:filter(func,seq.next())
}
function take<T>(amount: number, seq: LazySequence<T>): LazySequence<T> | undefined {
    // gets the first n numbers of a sequence
    return amount ? 
                    {
                        value: seq.value,
                        next: () => take(amount-1, seq.next())
                    }
                    : undefined
}
function reduce<T,V>(func: (_:V, x: T)=>V, seq: LazySequence<T>, start?:V): V {
    // Your code here ...
    return seq ? reduce(func,seq.next(),func(start,seq.value)): start
}

function reduceRight<T,V>(func:(v:V, t:T)=>V,seq: LazySequence<T>,start:V):V {
    // works from the end of lazysequence to the start T in lazy sequence
    return seq ? func(reduceRight(func, seq.next(), start), seq.value) : start
}
/*
    Exercise 3
 */
function maxNumber(seq: LazySequence<number>): number {
    // ******** YOUR CODE HERE ********
    // should return the largest number in a lazy sequence
    // 
    return reduce((max, val) => max > val ? max : val, seq, seq.value)
}

function lengthOfSequence(seq: LazySequence<any>): number {
    // ******** YOUR CODE HERE ********
    // Again only use reduce and don't
    // use `take` inside this function.
    //    return reduce(function(a,b){
    return reduce((x,_)=>x+1,seq,0)
}
function toArray<T>(seq: LazySequence<T>) : Array<T> {
    return reduce((acc, val) => acc.concat(val), seq, [])
}

/*
    Exercise 4 
 */
const series = initSequence((val:number) => val+1)(1)
const newSeries = map((val) => val%2===0 ? -2*val+1: 2*val-1,series)
console.log(toArray(take(10,newSeries)))
const a = map((x)=>1/x, take(10, newSeries))
console.log(toArray(take(2,a)))


function exercise4Solution(seriesLength: number): number {
    const series = initSequence((val:number) => val+1)(1)
    const newSeries = map( (val) => val%2===0 ? -2*val+1: 2*val-1,series)
    return reduce((acc:number,val:number) => (acc+val), take(seriesLength, (map((x)=>1/x, newSeries))), 0)
}

const s1 = initSequence((x: number) => -(x + Math.sign(x)))(1),
    seq = map((x) => -x, s1);

console.log(s1);

const t1 = take(10, initSequence((x: number) => (x + Math.sign(x)))(1));
console.log(t1);
console.log("hello")
console.log("duc");