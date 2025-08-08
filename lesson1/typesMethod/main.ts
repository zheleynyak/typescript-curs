type userType = {
	name: string;
	age: number;
	status: boolean;
	greeting: (str: string) => string;
};

let users: userType[] = [
	{ greeting: (str: string) => 'hello', name: 'vasya', age: 31, status: false },
	{ greeting: (str: string) => 'hello', name: 'petya', age: 30, status: true },
];
