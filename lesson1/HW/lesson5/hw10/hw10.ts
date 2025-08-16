let minNumber = (array: number[]): number => {
	let numb: number = array[0]!;
	for (const item of array) {
		if (numb > item) {
			numb = item;
		}
	}
	return numb;
};
console.log(minNumber([1, 2, 3, 4, 0, -2]));
