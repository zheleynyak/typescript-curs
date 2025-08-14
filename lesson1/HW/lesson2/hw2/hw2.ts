type bookType = {
	title: string;
	pageCount: number;
	genre: string;
};

let book1: bookType = {
	title: 'Garry Potter',
	pageCount: 400,
	genre: 'fantasy',
};
let book2: bookType = {
	title: 'English lern',
	pageCount: 120,
	genre: 'schoolbook',
};
let book3: bookType = {
	title: 'Akasha',
	pageCount: 240,
	genre: 'classic',
};

console.log(book1, book2, book3);
