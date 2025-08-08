let strValue: string | null = prompt('enter number');
if (strValue !== null) {
	let numValue = +strValue;
	if (!!numValue) {
		console.log('верно');
	} else {
		console.log('не верно');
	}
}
