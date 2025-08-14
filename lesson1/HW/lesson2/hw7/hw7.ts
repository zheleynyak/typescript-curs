let time: string | null = prompt('0-59');

if (time !== null) {
	let newTime = +time;
	if (newTime >= 0 && newTime < 16) {
		console.log('1');
	} else if (newTime >= 16 && newTime < 31) {
		console.log('2');
	} else if (newTime >= 31 && newTime < 46) {
		console.log('3');
	} else if (newTime >= 46 && newTime < 60) {
		console.log('4');
	}
}
