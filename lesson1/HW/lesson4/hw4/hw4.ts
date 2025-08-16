let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayIter(array: number[]): void {
	for (const item of array) {
		console.log(item);
	}
}

let iter = arrayIter(array);
console.log(iter);
