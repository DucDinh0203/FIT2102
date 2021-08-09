// Surname     | Firstname | Contribution % | Any issues?
// =====================================================
// Person 1... |           | 25%
// Person 2... |           | 25%
// Person 3... |           | 25%
// Person 4... |           | 25%
//
// complete Worksheet 2 by entering code in the places marked below...
//
// For full instructions and tests open the file worksheetChecklist.html
// in Chrome browser.  Keep it open side-by-side with your editor window.
// You will edit this file (main.js), save it, and reload the
// browser window to run the test.

const myObj = {
    aProperty: "Duc was here",
    anotherProperty: 23
}

// function add(x) {
//     return y => y+x
// }

// function operationOnTwoNumbers(x) {
//     return y => y * x
// }
const operationOnTwoNumbers = f => x => y => f(x,y)


// function callEach(array){
//     array.forEach(element => {
//         return element;
//     });
// }
const callEach = arr => {
    return arr.forEach(func => func());
}

/**
 * Exercise 4
 */
function addN(n , array){
    return array.map(num => n + num)
}

function getEvens(array){
    return array.filter(num => num % 2 === 0)
}

function multiplyArray(array){
    return array.filter(num => num !== 0).reduce((num1, num2) => num1 * num2)
}

/**
 * Exercise 5
 */
function range(n){
    if (n === 0){
        return []
    }
    else{
        return range(n-1).concat(n-1)
    }
}

/**
 * Exercise 6
 */
const Euler1 = () => {return range(1000).
    filter(num => (num%3 === 0 || num%5 === 0)).
    reduce((sum, n) => sum + n)
}

/**
 * Exercise 7
 */
// function infinite_series_calculator(accumulate, predicate, transform, n){
//     return range(n)
//     .filter(num => predicate(num))
//     .map(num => transform(num))
//     .reduce((num, sum) => accumulate(num, sum))
// }
const infinite_series_calculator = accumulate => predicate => transform => n => { return (range(n))
    .filter(num => predicate(num))
    .map(num => transform(num))
    .reduce((sum, num) => accumulate(num,sum))
}

/**
 * Exercise 8
 */
const calculatePiTerm = (n) => (4*n**2)/(4*n**2-1)

// skipZero function
const skipZero = (num) => num !== 0

// productAccumulate function
const productAccumulate = (res, num) => res * num

// calculatePi function
const calculatePi = (n) => {
    return 2*infinite_series_calculator(productAccumulate)(skipZero)(calculatePiTerm)(n)

}

const pi = calculatePi(100)

/**
 * Exercise 9
 */
// factorial function
const factorial = (n) => {
    if(n === 0 || n === 1){
        return 1
    }
    else {
        return n * factorial(n-1)
    }
    
}
// calculateETerm
const calculateETerm = (n) => (2 * (n+1)/factorial(2 * n + 1))

// sumAccumulate
const sumAccumulate = (x, y) => x + y

// alwaysTrue
const alwaysTrue = () => true

// sum_series_calcultor function

const sum_series_calculator = transform => n => {
    return infinite_series_calculator(sumAccumulate)(alwaysTrue)(transform)(n)
}

// calculateE function
const calculateE = (n) => {
    return sum_series_calculator(calculateETerm)(n)
}

const e = calculateE(100)

/**
 * Exercise 10
 */
// factorial in the same as calculate e

// calculate sin term
const calculateSinTerm = x => n => {
    return ((Math.pow(-1,n) * Math.pow(x,2*n +1))/(factorial(2*n+1))) 
}

// calculate sin
const sin = x => sum_series_calculator(n=>calculateSinTerm(x)(n))(100);