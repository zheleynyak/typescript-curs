function cylinder(r: number, h: number): number {
	return 2 * 3.14 * r * (h + r);
}

let Sc1 = cylinder(5, 10);
console.log(Sc1);
