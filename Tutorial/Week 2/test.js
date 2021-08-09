// my_array =['Duc', 'Tim', 'Anne', 'Jack']
// my_array.forEach(person => {
//     console.log(person);
// });

// function callEach(array){
//     array.forEach(element => {
//         console.log(element);
//     });
// }

// callEach(my_array);

num_list = [1, 2, 0, 3, 4, 5, 6, 0, 7, 8, 9, 10]

// num_list.map(num => 1 + num)
// console.log(num_list.map(num => 1 + num))

// function getEvens(array){
//     return array.filter(num => num % 2 === 0)
// }

// function multiplyArray(array) {
//     array.reduce((num, total) => {
//         if(num){
//             total *= num;
//         }
//         else{
//             total *= 1;
//         }
//     });
// }

// function multiplyArray(array){
//     return array.filter(num => num !== 0).reduce((num1, num2) => num1 * num2)
// }


// console.log(multiplyArray(num_list));

// let arr = [1, 2, 0, 3, 4, 5, 6, 0, 7, 8, 9, 10];
//       let total = arr.shift();
//       for (let i in arr) {
//         total *= arr[i] ? arr[i] : 1;
//       }
// console.log(total)

function range(n){
    if (n === 0){
        return []
    }
    else{
        return range(n-1).concat(n-1)
    }
}
const Euler1 = () => {return range(1000).
    filter(num => (num%3 === 0 || num%5 === 0)).
    reduce((sum, n) => sum + n)
}

// console.log(Euler1());

function aFunction(x) {

    return y => z => (y + z) * x;

}

console.log(aFunction(9)(2)(3))