function swap(array: number[], index1: number, index2: number) {
	let acumulate = array[index2];
	array[index2] = array[index1]!;
	array[index1] = acumulate!;
	return array;
}

let swap1 = swap([22, 11, 33, 44], 0, 3);
console.log(swap1);
