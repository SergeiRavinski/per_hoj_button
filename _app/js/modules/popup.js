import FetchCountries from './fetch_countries.js';

export default async function Popup() {
	const countries = await FetchCountries();
	const generateButton = document.querySelector('.main__button button');
	const frontpage = document.querySelector('.main__frontpage');
	const popup = document.querySelector('.main__popup');

	let randomIndex = 0;

	generateButton.addEventListener('click', handleChooseCountryButtonClick);

	function handleChooseCountryButtonClick() {
		getRandomIndex();
		openPopup();
		renderHTML();
	}

	function getRandomIndex() {
		randomIndex = Math.floor(Math.random() * countries.length);
	}

	function openPopup() {
		frontpage.style.display = frontpage.style.display = 'block'
			? 'none'
			: 'block';
		popup.style.display = popup.style.display = 'none' ? 'block' : 'none';
	}

}
