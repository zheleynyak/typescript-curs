interface Icourses {
	title: string;
	monthDuration: number;
}

let coursesAndDurationArray: Icourses[] = [
	{ title: 'JavaScript Complex', monthDuration: 5 },
	{ title: 'Java Complex', monthDuration: 6 },
	{ title: 'Python Complex', monthDuration: 6 },
	{ title: 'QA Complex', monthDuration: 4 },
	{ title: 'FullStack', monthDuration: 7 },
	{ title: 'Frontend', monthDuration: 4 },
];

if (!coursesAndDurationArray) {
	if (coursesAndDurationArray[0]['monthDuration'] > 5) {
		console.log('supper');
	}
	if (coursesAndDurationArray[1]['monthDuration'] > 5) {
		console.log('supper');
	}
	if (coursesAndDurationArray[2]['monthDuration'] > 5) {
		console.log('supper');
	}
	if (coursesAndDurationArray[3]['monthDuration'] > 5) {
		console.log('supper');
	}
	if (coursesAndDurationArray[4]['monthDuration'] > 5) {
		console.log('supper');
	}
	if (coursesAndDurationArray[5]['monthDuration'] > 5) {
		console.log('supper');
	}
}
