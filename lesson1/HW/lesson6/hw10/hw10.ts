let value: string[] = [
	'6',
	'7',
	'8',
	'9',
	'10',
	'Jack',
	'Queen',
	'King',
	'Ace',
];
let suit: string[] = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

interface ICard {
	cardSuit: string;
	cardValue: string;
	color: string;
}

let cards: ICard[] = [];

for (const cardValue of value) {
	for (const cardSuit of suit) {
		if (cardSuit === 'Hearts' || cardSuit === 'Diamonds') {
			cards.push({ cardSuit: cardSuit, cardValue: cardValue, color: 'red' });
		} else {
			cards.push({ cardSuit: cardSuit, cardValue: cardValue, color: 'black' });
		}
	}
}
console.log(cards);

let aceClubs = cards.find(
	value => value.cardSuit === 'Clubs' && value.cardValue === 'Ace'
);
console.log(aceClubs);

let allSix = cards.filter(value => {
	if (value.cardValue === '6') {
		return value;
	}
});
console.log(allSix);

let allRed = cards.filter(value => {
	if (value.color === 'red') {
		return value;
	}
});
console.log(allRed);

let allClubs = cards.filter(value => {
	if (value.cardSuit === 'Clubs') {
		return value;
	}
});
console.log(allClubs);

let allDiamonds = cards.filter(value => {
	if (value.cardSuit === 'Diamonds' && value.cardValue > '6') {
		return value;
	}
});
console.log(allDiamonds);
