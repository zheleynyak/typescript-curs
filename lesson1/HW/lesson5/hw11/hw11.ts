let sum = (array: number[]): number => {
	let sum: number = 0;
	for (const item of array) {
		sum += item;
	}
	return sum;
};

console.log(sum([1, 2, 3, 4, 5]));
