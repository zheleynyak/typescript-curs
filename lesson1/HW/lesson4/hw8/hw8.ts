function arrayBuilder(array: any[]): void {
	document.write(`<ul>`);
	for (const item of array) {
		document.write(`<li>${item}</li>`);
	}
	document.write(`</ul>`);
}

let arr = [1, 5, 23, true, 'aadfds', NaN, undefined];
arrayBuilder(arr);
