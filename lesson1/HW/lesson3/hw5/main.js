'use strict';
// Object.defineProperty(exports, "__esModule", { value: true });
let listOfItems = [
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
//# sourceMappingURL=main.js.map
