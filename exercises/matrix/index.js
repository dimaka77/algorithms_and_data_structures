// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let results = [];
	let counter = 1;
	let startRow = 0;
	let endRow = n - 1;
	let startColumn = 0;
	let endColumn = n - 1;

	// Create array of arrays
	for (let i = 0; i < n; i++) {
		results.push([]);
	}
	while (startRow <= endRow && startColumn <= endColumn) {

		// Fill top row
		for (let i = startColumn; i <= endColumn; i++) {
			results[startRow][i] = counter;
			counter++;
		}
		// Move start row one up
		startRow++;

		// Fill last column top to bottom
		for (let i = startRow; i <= endRow; i++) {
			results[i][endColumn] = counter;
			counter++;
		}
		// Shift last column from right to left
		endColumn--;

		// Fill last row from right to left
		for (let i = endColumn; i >= startColumn; i--) {
			results[endRow][i] = counter;
			counter++;
		}
		// Shift end row from bottow to the top
		endRow--;

		for (let i = endRow; i >= startRow; i--) {
			results[i][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}
	return results;
}

matrix(4);

module.exports = matrix;
