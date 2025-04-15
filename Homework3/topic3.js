// //Task 1
// const array = [2, 3, 4, 5];
// let result = 1
// for(let i=0; i<array.length; i++){
//     result*=array[i];
// }

// console.log(`Result from for loop: ${result}`);

// let j =0;
// let whileResult = 1;

// while(j<array.length){
//     whileResult*=array[j];
//     j++;
// }
// console.log(`Result from while loop: ${whileResult}`);

// //Task 2
// for(let i=0; i<=15; i++){
//     if(i%2===0)
//         console.log(`${i} is even.`);
//     else
//         console.log(`${i} is odd.`);
// }

// //Task 3

// function randArray (k){
//     const array = [];
//     for(let i = 0; i<k; i++) {
//         array.push(Math.floor(Math.random() * 500) + 1);
//     }
//     return array;
// }

// console.log(randArray(5));

// // Task 4

// function raiseToDegree(a, b){
//     return Math.pow(a, b);
// }

// let a = +prompt("Enter a number");
// let b = +prompt("Enter degree");

// if (!isNaN(a) && !isNaN(b)) {
//     console.log(`The result of function raiseToDegree: ${raiseToDegree(a,b)}`)
// }
// else{
//     console.log("Incorrect data");
// }

// // Task 5

// function findMin(){
//     let min = arguments[0];
//     for (let i =0; i < arguments.length; i++){
//         if(arguments[i]<min)
//             min = arguments[i];
//     }
//     return min;
// }

// console.log(findMin(12, 14, 4, -4, 0.2));

//Task 6
function findUnique(arr) {
    arr.sort();
    for(let i = 0; i<arr.length-1; i++) {
        if(arr[i]==arr[i+1])
            return false;
    }
  return true;
}

console.log(findUnique([1, 2, 3, 5, 1]));

// //Task 6

// function findUnique(arr) {
//     const seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (seen[arr[i]]) {
//       return false;
//     }
//     seen[arr[i]] = true;
//   }

//   return true;
// }

// console.log(findUnique([1, 2, 3, 2]));

// //Task 7

// function lastElem(arr, count =1) {
//     if(count<=arr.length)
//         return arr.slice(-count);
//     else {
//         return arr;
//     }
// }
// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5],2));

// //Task 8
// function capitalizeWords(str) {
//     let words = str.split(' ');

//     for(let i in words) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     return words.join(' ');
// }

// let inputString = 'i love java script';
// console.log(capitalizeWords(inputString));

