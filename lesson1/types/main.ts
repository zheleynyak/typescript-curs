// let a: number = 1234;
// let b: boolean = true;
// let c: string = 'hello';

// function foo(arg1: number, arg2: number): number {
// 	return arg1 + arg2;
// }

// let arr: number[] = [1, 2, 3, 4, 5];
// arr.push(1);

// let users: {name: string, age: number, status: boolean}[] = [
// 	{ name: 'Denis', age: 21, status: true },
// 	{ name: 'Petya', age: 30, status: true },
// 	{ name: 'Max', age: 25, status: false },
// ];

type userType = {
	name: string;
	age: number;
	status: boolean;
	gender?: string;
};

let users: userType[] = [
	{ name: 'Denis', age: 21, status: true, gender: 'male' },
	{ name: 'Petya', age: 30, status: true },
	{ name: 'Max', age: 25, status: false },
];
