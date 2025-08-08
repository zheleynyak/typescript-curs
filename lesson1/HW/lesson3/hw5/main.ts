let listOfItems: string[] = [
	'html',
	'css',
	'javascript',
	'mysql',
	'mongodb',
	'react',
	'angular',
	'node.js',
];

document.write(`<ul>`);
for (const item of listOfItems) {
	document.write(`<li class='item'> ${item} </li>`);
}
document.write(`</ul>`);
