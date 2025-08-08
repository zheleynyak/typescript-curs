type productType = {
	title: string;
	price: number;
	image: string;
};

let products: productType[] = [
	{
		title: 'milk',
		price: 22,
		image:
			'https://www.americandairy.com/wp-content/uploads/2016/03/glass-of-milk.jpg',
	},
	{
		title: 'juice',
		price: 27,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg',
	},
	{
		title: 'tomato',
		price: 47,
		image:
			'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74',
	},
	{
		title: 'tea',
		price: 15,
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Cup_of_black_tea.JPG/960px-Cup_of_black_tea.JPG',
	},
];

for (const item of products) {
	document.write(`<div class="product-card">
                        <h3 class="product-card">${item.title}. Price - ${item.price}</h3>
                        <img src="${item.image}" alt="${item.title}" class="product-image">
                        </div>`);
}
