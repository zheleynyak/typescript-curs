let day: string | null = prompt('enter day');

if (day !== null) {
	let newDay = +day;

	if (newDay >= 1 && newDay <= 10) {
		console.log('1');
	} else if (newDay >= 11 && newDay <= 21) {
		console.log('2');
	} else if (newDay >= 22 && newDay <= 31) {
		console.log('3');
	}
}
