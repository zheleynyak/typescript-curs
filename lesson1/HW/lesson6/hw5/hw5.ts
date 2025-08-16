let str: string = 'Ревуть волы як ясла повнi';
function stringToArray(string: string): string[] {
	let splitStr = string.split(' ');
	return splitStr;
}
console.log(stringToArray(str));
