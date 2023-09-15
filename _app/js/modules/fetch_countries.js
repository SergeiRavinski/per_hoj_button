import { sanity } from '../sanity.js';

export default async function FetchCountries() {
	const query = `*[_type == 'country'] {
		country,
		"slug": slug{current},
		capital,
		"language": official_language -> {language},
		population,
		currency,
		"description": description[0]{children[0]{text}},
		gallery {asset -> {url}}
	}`;
	const countries = await sanity.fetch(query);

	return countries;
}
