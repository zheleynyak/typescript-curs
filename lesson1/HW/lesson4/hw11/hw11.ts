function sum(array: number[]): number {
	let sumArr = 0;
	for (const number of array) {
		sumArr += number;
	}
	return sumArr;
}

console.log(sum([12, 12, 1]));
