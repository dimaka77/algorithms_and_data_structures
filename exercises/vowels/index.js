// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Iterative + 2 for loops
// function vowels(str) {
//     let count = 0;
//     const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
//     const strToArr = str.toLowerCase().split('');

//     for (let i in strToArr) {

//         for (let a in vowelsArr) {
//             if (vowelsArr[a] === strToArr[i]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// Iterative + includes
// function vowels(str) {
//     let counter = 0;
//     const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (vowelsArr.includes(char)) {
//             counter++;
//         }
//     }
//     return counter;
// }

// RegEx
function vowels(str) {
    // g - don't stop after first match
    // i - case insensitive
   const matches = str.match(/[aeiou]/gi);
   return matches ? matches.length : 0;
}

vowels('Why do you ask?');
module.exports = vowels;
