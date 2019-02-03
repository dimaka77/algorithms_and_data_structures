// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const out = str.split(' ').reduce((acc, curr) => {
        acc.push(curr[0].toUpperCase() + curr.slice(1));
        return acc;
    }, []);
    return out.join(' ');
}

capitalize('i love breakfast at bill miller bbq')

module.exports = capitalize;
