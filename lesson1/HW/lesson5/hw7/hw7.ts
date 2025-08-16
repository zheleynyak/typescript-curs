let builderUL = (text: string, li: number): void => {
	document.write(`<ul>`);
	for (let i = 0; i < li; i++) {
		document.write(`<li>${text}</li>`);
	}
	document.write(`</ul>`);
};

builderUL('adfas', 5);
