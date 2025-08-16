interface IcurrencyValues {
	currency: string;
	value: number;
}

function exchange(
	sumUAH: number,
	currencyValues: IcurrencyValues[],
	exchangeCurrency: string
) {
	for (const currency of currencyValues) {
		if (currency['currency'] === exchangeCurrency) {
			return sumUAH / currency['value'];
		}
	}
}
console.log(
	exchange(
		10000,
		[
			{ currency: 'USD', value: 25 },
			{ currency: 'EUR', value: 42 },
		],
		'USD'
	)
);
