let arrayUL = (array: number[]): void => {
	document.write(`<ul>`);
	for (const item of array) {
		document.write(`<li>${item}</li>`);
	}
	document.write(`</ul>`);
};

arrayUL([1, 2, 3, 4, 5]);
