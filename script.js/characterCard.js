const heroes = [
	{
		name: 'Batman',
		description: 'Description',
		image: './src/images/dc-batman.jpg',
	},
	{
		name: 'Wonder woman',
		description: 'My Description 2',
		image: '/src/images/dc-wonder.jpg',
	},
	{
		name: 'Arrow',
		description: 'My Description 3',
		image: './src/images/dc-arrow.jpg',
	},
	{
		name: 'DC Black',
		description: 'My Description 2',
		image: './src/images/dc-black.jpg',
	},
	{
		name: 'DC Blue',
		description: 'My Description 2',
		image: './src/images/dc-blue.jpg',
	},
	{
		name: 'DC Flash',
		description: 'My Description 2',
		image: './src/images/dc-flash.jpg',
	},
];

// const images = [
// 	'./src/images/dc-batman.jpg',
// 	'./src/images/dc-wonder.jpg',
// 	'./src/images/dc-arrow.jpg',
// 	'./src/images/dc-black.jpg',

// ];

const target = document.getElementById('target');

const init = () => {
	const template = document.querySelector('template');

	heroes.forEach((hero, i) => {
		const clone = template.cloneNode(true).content;
		const image = clone.querySelector('img');
		image.src = hero.image;

		const h4 = clone.querySelector('h4');
		h4.innerHTML = hero.name;

		const pEl = clone.querySelector('p');
		pEl.innerHTML = hero.description;

		target.appendChild(clone);
	});
};

init();
