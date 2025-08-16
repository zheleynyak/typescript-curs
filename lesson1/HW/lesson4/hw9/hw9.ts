interface IUser {
	id: number;
	name: string;
	age: number;
}

function objectBuild(array: IUser[]): void {
	for (const obj of array) {
		document.write(`<div> ${obj.id}, ${obj.name}, ${obj.age} </div>`);
	}
}

let users = [
	{ id: 1, name: 'name', age: 19 },
	{ id: 2, name: 'name', age: 19 },
	{ id: 3, name: 'name', age: 19 },
	{ id: 4, name: 'name', age: 19 },
	{ id: 5, name: 'name', age: 19 },
	{ id: 6, name: 'name', age: 19 },
	{ id: 7, name: 'name', age: 19 },
];

objectBuild(users);
