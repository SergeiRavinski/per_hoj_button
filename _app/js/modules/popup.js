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

	function renderHTML() {
		popup.innerHTML = '';
		const currentCountry = countries[`${randomIndex}`];

		const countryTitleCloseContainer = document.createElement('div');
		const countryTitleContainer = document.createElement('div');
		const countryTitle = document.createElement('h1');
		const countryCloseButton = document.createElement('button');
		const countryContextContainer = document.createElement('div');
		const countryInformationContainer = document.createElement('div');
		const countryTitlesContainer = document.createElement('div');
		const countryCapitalContainer = document.createElement('div');
		const countryCapitalH3 = document.createElement('h3');
		const countryCapitalH4 = document.createElement('h4');
		const countryOfficialLanguageContainer = document.createElement('div');
		const countryOfficialLanguageH3 = document.createElement('h3');
		const countryOfficialLanguageH4 = document.createElement('h4');
		const countryPopulationContainer = document.createElement('div');
		const countryPopulationH3 = document.createElement('h3');
		const countryPopulationH4 = document.createElement('h4');
		const countryCurrencyContainer = document.createElement('div');
		const countryCurrencyH3 = document.createElement('h3');
		const countryCurrencyH4 = document.createElement('h4');
		const countryP = document.createElement('p');
		const countryImageContainer = document.createElement('div');
		const countryImage = document.createElement('img');

		countryTitleCloseContainer.className = 'main__popup-title-close';
		countryCloseButton.className = 'main__popup-close';
		countryContextContainer.className = 'main__popup-context';
		countryInformationContainer.className = 'main__popup-information';
		countryImageContainer.className = 'main__popup-image';

		countryCloseButton.addEventListener(
			'click',
			handleClosePopupButtonClick
		);

		countryImage.setAttribute('alt', 'Image of a capital');
		countryImage.setAttribute('loading', 'lazy');

		countryTitle.innerText = currentCountry.country;
		countryCapitalH3.innerText = 'Capital';
		countryCapitalH4.innerText = currentCountry.capital;
		countryOfficialLanguageH3.innerHTML = 'Official Language';
		countryOfficialLanguageH4.innerText = `${currentCountry.language}`;
		countryPopulationH3.innerText = 'Population';
		countryPopulationH4.innerText = currentCountry.population;
		countryCurrencyH3.innerText = 'Currency';
		countryCurrencyH4.innerText = currentCountry.currency;
		countryP.innerText = currentCountry.description.children.text;
		countryImage.src = currentCountry.image.asset.url;

		popup.append(countryTitleCloseContainer, countryContextContainer);
		countryTitleCloseContainer.append(
			countryTitleContainer,
			countryCloseButton
		);
		countryContextContainer.append(
			countryInformationContainer,
			countryImageContainer
		);
		countryTitleContainer.appendChild(countryTitle);
		countryInformationContainer.append(countryTitlesContainer, countryP);
		countryImageContainer.appendChild(countryImage);
		countryTitlesContainer.append(
			countryCapitalContainer,
			countryOfficialLanguageContainer,
			countryPopulationContainer,
			countryCurrencyContainer
		);
		countryCapitalContainer.append(countryCapitalH3, countryCapitalH4);
		countryOfficialLanguageContainer.append(
			countryOfficialLanguageH3,
			countryOfficialLanguageH4
		);
		countryPopulationContainer.append(
			countryPopulationH3,
			countryPopulationH4
		);
		countryCurrencyContainer.append(countryCurrencyH3, countryCurrencyH4);
	}

	function handleClosePopupButtonClick() {
		frontpage.style.display = frontpage.style.display = 'none'
			? 'block'
			: 'none';
		popup.style.display = popup.style.display = 'block' ? 'none' : 'block';
	}
}
