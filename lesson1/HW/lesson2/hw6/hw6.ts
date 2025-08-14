let x: string | null = prompt('enter number');

if (x !== null) {
	let numX = +x;
	if (!!numX) {
		console.log('верно');
	} else {
		console.log('не верно');
	}
}
