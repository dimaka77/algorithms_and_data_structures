// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'


function pyramid(n) {
    // find midpoint
    const midpoint = Math.floor((n * 2 - 1) / 2);

    // iterate over each row
    for (let row = 0; row < n; row++) {
        let level = '';

        // iterate over each column of the row
        // n * 2 - 1 -> get the amount of columns
        for (let column = 0; column < (n * 2 - 1); column++) {

            // __#__ -> i.e. for the first row, which has index of 0
            // midpoint = 2 -> 2 - 0 = 2 && 2 + 0 = 2, so # would be placed at index 2
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
};

// Recursive
// function pyramid(n, row = 0, level = '') {
//     if (row === n) {
//         return;
//     }
//     if (level.length === 2 * n - 1) {
//         console.log(level);
//         return pyramid(n, row + 1);
//     }
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     let add;
//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = '#';
//     } else {
//         add = ' ';
//     }
//     pyramid(n, row, level + add);
// }
pyramid(3);
module.exports = pyramid;
