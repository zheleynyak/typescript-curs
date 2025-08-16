function smallNumb(array: number[]): number {
	let acumulater = array[0]!;
	for (let i = 1; i < array.length; i++) {
		if (acumulater > array[i]!) {
			acumulater = array[i]!;
		}
	}
	return acumulater;
}

let array = [1, 0, 19, -2, 2323, -3];
let x = smallNumb(array);
console.log(x);
