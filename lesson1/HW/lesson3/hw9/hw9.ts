let array: (number | string | boolean | undefined)[] = [
	1,
	2,
	3,
	4,
	5,
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	true,
	false,
	NaN,
	undefined,
];
let numbers: number[] = [1, 2, 3, 4, 5];
let string: string[] = ['q', 'w', 'e', 'r', 't'];
let mixed: (string | boolean | undefined | number)[] = [
	'y',
	true,
	false,
	NaN,
	undefined,
];

console.log(array, numbers, string, mixed);
