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

// type userType = {
// 	name: string;
// 	age: number;
// 	status: boolean;
// 	gender?: string;
// };

// let users: userType[] = [
// 	{ name: 'Denis', age: 21, status: true, gender: 'male' },
// 	{ name: 'Petya', age: 30, status: true },
// 	{ name: 'Max', age: 25, status: false },
// ];

// type userType = {
// 	name: string;
// 	age: number;
// 	status: boolean;
// 	greeting: (str: string) => string;
// };

// let users: userType[] = [
// 	{ greeting: (str: string) => 'hello', name: 'vasya', age: 31, status: false },
// 	{ greeting: (str: string) => 'hello', name: 'petya', age: 30, status: true },
// ];

interface iUser {
	name: string;
	age: number;
	status: boolean;
	greeting: (str: string) => string;
}

let users: iUser[] = [
	{ greeting: (str: string) => 'hello', name: 'Denis', age: 21, status: true },
	{ greeting: (str: string) => 'hello1', name: 'Petya', age: 26, status: true },
];

// class User {
// 	constructor(public name: string, public age: number, public status: boolean) {
// 		this.name = name;
// 		this.age = age;
// 		this.status = status;
// 	}

// 	greeting() {
// 		console.log('qwerty');
// 	}
// }

// let users: User[] = [new User('q2erq', 123, true)];
console.log('12414124231');
