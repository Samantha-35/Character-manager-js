const base_url = 'https://character-database.becode.xyz/characters';

const inputName = document.getElementById('name');
const inputShortDescription = document.getElementById('short-description');
const inputLongDescription = document.getElementById('long-description');
const inputImage = document.getElementById('image-input');

const button = document.querySelector('button');

const addCharacter = async (character) => {
	try {
		const res = await fetch(base_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(character),
		});

		const data = await res.json();
		console.log('server response', data);
	} catch (error) {
		console.log(error);
	}
};

const init = () => {
	button.addEventListener('click', () => {
		const name = inputName.value;
		const shortDescription = inputShortDescription.value;

		console.log(shortDescription);

		const longDescription = inputLongDescription.value;
		console.log(longDescription);

		const image = inputImage.files[0];

		const formData = new FormData();

		formData.append('image', image);

		const character = {
			name,
			shortDescription,
			description: longDescription,
			// image: formData,
		};

		addCharacter(character);
	});
};

init();
