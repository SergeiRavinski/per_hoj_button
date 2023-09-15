import FetchCountries from './fetch_countries.js';

export default async function FrontPage() {
	const countries = await FetchCountries();

	console.log(countries);
}
