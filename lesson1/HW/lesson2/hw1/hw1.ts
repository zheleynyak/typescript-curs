let arr: (
	| number
	| string
	| boolean
	| null
	| undefined
	| { name: string; age: number }
)[] = [
	1,
	'hello',
	true,
	null,
	undefined,
	NaN,
	232.3,
	-12,
	false,
	{ name: 'vasua', age: 32 },
];
console.log(arr);
