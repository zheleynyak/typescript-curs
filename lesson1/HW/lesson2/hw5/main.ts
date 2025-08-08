type watherType = {
	date: number;
	day: number;
	morning: number;
	evening: number;
};

let wathers: watherType[] = [
	{ date: 1, morning: 15, day: 25, evening: 24 },
	{ date: 2, morning: 14, day: 23, evening: 19 },
	{ date: 3, morning: 16, day: 28, evening: 23 },
	{ date: 4, morning: 15, day: 28, evening: 20 },
	{ date: 5, morning: 18, day: 29, evening: 25 },
	{ date: 6, morning: 17, day: 27, evening: 23 },
	{ date: 7, morning: 19, day: 31, evening: 27 },
];

console.log(wathers);
console.log(wathers[5]);
