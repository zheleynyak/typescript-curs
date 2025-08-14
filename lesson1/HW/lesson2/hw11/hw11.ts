let x: null | number | string | boolean | undefined | undefined = null;

if (!x) {
	x = 'default';
	console.log(x);
} else {
	console.log(':)');
}
