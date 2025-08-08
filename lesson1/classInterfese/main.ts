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
