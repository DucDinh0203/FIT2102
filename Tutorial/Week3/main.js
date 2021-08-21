/*
Complete the following table when you submit this file:

Surname     | Firstname | email | Contribution% | Any issues?
=============================================================
Person 1... |           |       | 25%           |
Person 2... |           |       | 25%           |
Person 3... |           |       | 25%           |
Person 4... |           |       | 25%           |

complete Worksheet 3 by entering code in the places marked below...

For instructions and tests open the file worksheetChecklist.html
in Chrome browser.  Keep it open side-by-side with your editor window.
You will edit this file (main.ts), save it, and reload the
browser window to run the test.
*/
/**
 * Exercise 1:
*/
let someNum = 10;
let aString = "Hello!!!!";
function addStuff(a, b) {
    return a + b;
}
function numberToString(input) {
    return JSON.stringify(input);
}
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
padLeft("Hello world", 4); // returns "    Hello world"
function curry(f) {
    return function (x) {
        return function (y) {
            return f(x, y);
        };
    };
}
/**
 * cons "constructs" a list node, if no second argument is specified it is the last node in the list
 */
function cons(head, rest) {
    return (selector) => selector(head, rest);
}
/**
 * head selector, returns the first element in the list
 * @param list is a Cons (note, not an empty ConsList)
 */
function head(list) {
    return list((head, rest) => head);
}
/**
 * rest selector, everything but the head
 * @param list is a Cons (note, not an empty ConsList)
 */
function rest(list) {
    return list((head, rest) => rest);
}
/**
 * Use this as an example for other functions!
 * @param f Function to use for each element
 * @param list is a Cons
 */
function forEach(f, list) {
    if (list) {
        f(head(list));
        forEach(f, rest(list));
    }
}
function map(f, l) {
    return !l ? null : cons(f(head(l)), map(f, rest(l)));
}
//
// Exercise 3: 
// 
// example use of reduce:
function countLetters(stringArray) {
    const list = fromArray(stringArray);
    return reduce((len, s) => len + s.length, 0, list);
}
console.log(countLetters(["Hello", "there!"]));
function fromArray(arr) {
    // Hint: You can do this recursively - use arr.slice(1) to get a copy of
    // the array excluding the first element:
    // > ([1, 2, 3]).slice(1)
    // [2, 3]
    // Alternatively, you can use an array reduce method (arr.reduce, arr.reduceRight)
    // to do it without recursion.
    return arr.length == 0 ? null : cons(arr[0], fromArray(arr.slice(1)));
}
function filter(f, list) {
    return list && (f(head(list)) ? cons(head(list), filter(f, rest(list))) : filter(f, rest(list)));
}
function reduce(f, initial, list) {
    return list ? reduce(f, f(initial, head(list)), rest(list)) : initial;
}
function reduceRight(f, initial, list) {
    return list ? reduceRight(f, f(head(list), initial), rest(list)) : initial;
}
function concat(list1, list2) {
    return list1 ? cons(head(list1), concat(rest(list1), list2))
        : list2 ? cons(head(list2), concat(list1, rest(list2))) : null;
}
// function reverse<T>(list1:ConsList<T>):ConsList<T>{
//     if (list1){
//         return concat(reverse(rest(list1)), cons(head(list1),null));
//     }else {
//         return null
//     }
// }
function reverse(list1) {
    return list1 ? concat(reverse(rest(list1)), cons(head(list1), null)) : null;
}
//
// Exercise 4:
// 
/**
 * A linked list backed by a ConsList
 */
class List {
    constructor(list) {
        if (list instanceof Array) {
            this.head = fromArray(list);
        }
        else {
            this.head = (list === null) ? null : list;
        }
    }
    /**
     * create an array containing all the elements of this List
     */
    toArray() {
        // Getting type errors here?
        // Make sure your type annotation for reduce()
        // in Exercise 3 is correct!
        return reduce((a, t) => [...a, t], [], this.head);
    }
    map(f) {
        return new List(map(f, this.head));
    }
    forEach(f) {
        forEach(f, this.head);
        return new List(this.head);
    }
    filter(f) {
        return new List(filter(f, this.head));
    }
    reduce(f, initialValue) {
        return reduce(f, initialValue, this.head);
    }
    concat(newlist) {
        return new List(concat(this.head, newlist.head));
    }
}
/**
 * Exercise 5:
 */
function line(aString) {
    return [0, aString];
}
function lineToList(line) {
    return new List([line]);
}
class BinaryTreeNode {
    constructor(data, leftChild, rightChild) {
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}
// example tree:
const myTree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(3)), new BinaryTreeNode(4));
// *** uncomment the following code once you have implemented List and nest function (above) ***
function prettyPrintBinaryTree(node) {
    if (!node) {
        return new List([]);
    }
    const thisLine = lineToList(line(node.data.toString())), leftLines = prettyPrintBinaryTree(node.leftChild), rightLines = prettyPrintBinaryTree(node.rightChild);
    return thisLine.concat(nest(1, leftLines.concat(rightLines)));
}
const output = prettyPrintBinaryTree(myTree)
    .map(aLine => new Array(aLine[0] + 1).join('-') + aLine[1])
    .reduce((a, b) => a + '\n' + b, '').trim();
console.log(output);
function nest(indent, layout) {
    return layout.map(n => [n[0] + indent, n[1]]);
}
/**
 * Exercise 7:
 *  implement prettyPrintNaryTree, which takes a NaryTree as input
 *  and returns a list of the type expected by your nest function
 */
class NaryTree {
    constructor(data, children = new List(undefined)) {
        this.data = data;
        this.children = children;
    }
}
// Example tree for you to print:
let naryTree = new NaryTree(1, new List([
    new NaryTree(2),
    new NaryTree(3, new List([
        new NaryTree(4),
    ])),
    new NaryTree(5)
]));
// implement: function prettyPrintNaryTree(...)
// function prettyPrintNaryTree<T>(node: NaryTree<T>): List<[number, string]> {
//     if(!node){
//         return new List <[number, string]>([])
//     }
//     else{
//         const thisLine = lineToList(line(node.data.toString())),
//         return thisLine.concat(nest(1, childLines.reduce((acc, val) => acc.concat(val), new List<[number, string]>([]))))
//     }
// }
function prettyPrintNaryTree(node) {
    if (!node) {
        return new List([]);
    }
    const thisLine = lineToList(line(node.data.toString())), child = node.children.map(function (x) {
        return prettyPrintNaryTree(x);
    });
    const reducedChild = child.reduce((accumulator, x) => accumulator.concat(x), new List([]));
    return thisLine.concat(nest(1, reducedChild));
}
// *** uncomment the following code once you have implemented prettyPrintNaryTree (above) ***
// 
const outputNaryTree = prettyPrintNaryTree(naryTree)
    .map(aLine => new Array(aLine[0] + 1).join('-') + aLine[1])
    .reduce((a, b) => a + '\n' + b, '').trim();
console.log(outputNaryTree);
const jsonPrettyToDoc = json => {
    if (Array.isArray(json)) {
        // Handle the Array case.
        const thisLine = lineToList(line("["));
        const nextLine = json.map(val => lineToList(line(val.toString())));
        const end = lineToList(line("]"));
        return thisLine.concat(nest(1, nextLine.reduce((acc, x) => acc.concat(x), new List([])))).concat(end);
    }
    else if (typeof json === 'object' && json !== null) {
        // Handle the object case.
        // Hint: use Object.keys(json) to get a list of
        // keys that the object has.
        let keys = Object.keys(json);
        const thisLine = lineToList(line("{"));
        const nextLine = keys.map(val => lineToList(line(val.toString().concat(" :"))).concat(jsonPrettyToDoc(json[val])));
        const res = thisLine.concat(nest(1, nextLine
            .reduce((acc, x) => acc.concat(x), new List([]))));
        console.log(res);
        return res.concat(lineToList(line("}")));
    }
    else if (typeof json === 'string') {
        // Handle string case.
        console.log(json.toString());
        const thisLine = lineToList(line(json.toString()));
        console.log(thisLine);
        return thisLine;
    }
    else if (typeof json === 'number') {
        // Handle number
        const thisLine = lineToList(line(json.toString()));
        return thisLine;
    }
    else if (typeof json === 'boolean') {
        // Handle the boolean case
        const thisLine = lineToList(line(json.toString()));
        return thisLine;
    }
    else if (json === null) {
        // Handle the null case
        const thisLine = lineToList(line('null'));
        return thisLine;
    }
    // Default case to fall back on.
    return new List([]);
};
// *** uncomment the following code once you are ready to test your implemented jsonPrettyToDoc ***
const json = {
    unit: "FIT2102",
    year: 2021,
    semester: "S2",
    active: true,
    assessments: { "week1": null, "week2": "Tutorial 1 Exercise", "week3": "Tutorial 2 Exercise" },
    languages: ["Javascript", "Typescript", "Haskell", "Minizinc"]
};
function lineIndented(aLine) {
    return new Array(aLine[0] + 1).join('    ') + aLine[1];
}
function appendLine(acc, nextLine) {
    return nextLine.slice(-1) === "," ? acc + nextLine.trim() :
        acc.slice(-1) === ":" ? acc + " " + nextLine.trim() :
            acc + '\n' + nextLine;
}
console.log(jsonPrettyToDoc(json)
    .map(lineIndented)
    .reduce(appendLine, '').trim());
// *** This is what it should look like in the console ***
// 
// {
//     unit: FIT2102,
//     year: 2021,
//     semester: S2,
//     active: true,
//     assessments: {
//         week1: null,
//         week2: Tutorial 1 Exercise,
//         week3: Tutorial 2 Exercise
//     },
//     languages: [
//         Javascript,
//         Typescript,
//         Haskell,
//         Minizinc
//     ]
// }
//# sourceMappingURL=main.js.map
console.log([1,2].reduce((x,y) => y - x, 0, cons(9, cons(3, cons(1, null)))));