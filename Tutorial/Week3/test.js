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

function reverse(list1) {
    return list1 ? concat(reverse(rest(list1)), cons(head(list1), null)) : null;
}
function take(n, l) {

    return n ? cons(head(l), take(n - 1, rest(l))) : null;
 
  }
  console.log(take(4, [1,2,3,4]));
// const object = { studentId: 1, assignmentMark: 65, examMark: 67 } as const;



//  const updatedObject = { ...object, examMark: 72 };