interface IUser {
	id: number;
	name: string;
	age: string;
}

let displayObjects = (array: IUser[]): void => {
	for (const object of array) {
		document.write(`<div> ${object.id}, ${object.name}, ${object.age}</div>`);
	}
};

let users: IUser[] = [
	{ id: 1, name: 'name', age: 'age' },
	{ id: 2, name: 'name', age: 'age' },
	{ id: 3, name: 'name', age: 'age' },
	{ id: 4, name: 'name', age: 'age' },
	{ id: 5, name: 'name', age: 'age' },
	{ id: 6, name: 'name', age: 'age' },
	{ id: 7, name: 'name', age: 'age' },
];

displayObjects(users);
