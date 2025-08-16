interface currencyValues {
	currency: string;
	value: number;
}

let exchange = (
	sumUAH: number,
	currencyValues: currencyValues[],
	exchangeCurrency: string
) => {
	for (const item of currencyValues) {
		if (item.currency === exchangeCurrency) {
			return sumUAH / item.value;
		}
	}
};

let currency = exchange(
	10000,
	[
		{ currency: 'USD', value: 40 },
		{ currency: 'EUR', value: 42 },
	],
	'EUR'
);
console.log(currency);
