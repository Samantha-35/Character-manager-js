import { getCharacters } from './getCharacters.js';

const target = document.getElementById('target');
const template = document.querySelector('template');

const init = async () => {
	const characters = await getCharacters();

	characters.forEach((hero, i) => {
		const clone = template.cloneNode(true).content;
		const image = clone.querySelector('img');

		image.src = `data:image/*;base64,${hero.image}`;

		const h4 = clone.querySelector('h4');
		h4.innerHTML = hero.name;

		const h5 = clone.querySelector('h5');
		h5.innerHTML = hero.shortDescription;

		const pEl = clone.querySelector('p');
		pEl.innerHTML = hero.description;

		target.appendChild(clone);
	});
};

init();
