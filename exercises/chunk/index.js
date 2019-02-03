// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // create empty array to hold chunks
    let chunked = [];
    // for element in unchunked array
    for (let element of array) {
        // retreive last element in 'chunked' array
        const last = chunked[chunked.length - 1];
        console.log('LAST', last && last.length);
        if (!last || last.length === size) {
            // push a new chunk into chunked with the current element
            chunked.push([element]);
        } else {
            // add the current element into the chunk
            last.push(element);
        }
    }
    return chunked;
}

// Using slice
// function chunk(array, size) {
//     const chunked = [];
//     let index = 0;

//     while (index < array.length) {
//         console.log('IRED', index + size);
//         chunked.push(array.slice(index, index + size));

//         index+=size;
//     }
//     return chunked;
// }

// Using splice
// function chunk(array, size) {
//     let newArr = [...array];
//     let arr = [];

//     while (newArr.length) {
//         arr.push(newArr.splice(0, size));
//     }
//     return arr;
// }

console.log(chunk([1, 2, 3, 4, 5], 2));
module.exports = chunk;
