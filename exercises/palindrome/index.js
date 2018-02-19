// import { reverse } from "dns";

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 1.
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// 2.
// function palindrome(str = '') {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed === str;
// }

// 3.
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}


// palindrome('abba');
module.exports = palindrome;
