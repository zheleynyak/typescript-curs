function inputUL(text: string, liCount: number): void {
	document.write(`<ul>`);
	for (let i = 0; i < liCount; i++) {
		document.write(`<li>${i + 1} ${text}</li>`);
	}
	document.write(`</ul>`);
}

inputUL('text', 10);
