let swap = (array: number[], index1: number, index2: number) => {
	let temporaryNumb = array[index1];
	array[index1] = array[index2]!;
	array[index2] = temporaryNumb!;
	return array;
};
// t = 11 index1 = 22 index2 = 22 index2 = index1
console.log(swap([11, 22, 33, 44], 0, 1));
