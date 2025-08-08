let x: string | null = prompt();
let y: string | null = prompt();

if (x !== null && y !== null) {
	let numbX = +x;
	let numbY = +y;

	if (numbX > numbY) {
		console.log(numbX);
	} else if (numbY > numbX) {
		console.log(numbY);
	} else if (numbX === numbY) {
		console.log('===');
	}
}
