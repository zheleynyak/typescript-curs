type bookType = {
	title: string;
	pageCount: number;
	genre: string;
	author: { name: string; age: number }[];
};

let book1: bookType = {
	title: 'Garry Potter',
	pageCount: 400,
	genre: 'fantasy',
	author: [
		{ name: 'Vasua', age: 32 },
		{ name: 'Vasua', age: 32 },
		{ name: 'Vasua', age: 32 },
	],
};
let book2: bookType = {
	title: 'English lern',
	pageCount: 120,
	genre: 'schoolbook',
	author: [
		{ name: 'Vasua', age: 32 },
		{ name: 'Vasua', age: 32 },
		{ name: 'Vasua', age: 32 },
	],
};
let book3: bookType = {
	title: 'Akasha',
	pageCount: 240,
	genre: 'classic',
	author: [
		{ name: 'Vasua', age: 32 },
		{ name: 'Denis', age: 32 },
		{ name: 'Vasua', age: 32 },
	],
};
