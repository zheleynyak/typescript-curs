type arrType = number | boolean | string;

let arr: arrType[] = [1, 2, 3, true, 'word'];

let arrayIter = (array: arrType[]): void => {
	for (const item of array) {
		console.log(item);
	}
};

arrayIter(arr);
