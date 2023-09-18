import { sanity } from '../sanity.js';

export default async function FetchCountries() {
	const query = `*[_type == 'country'] {
		...,
		"language": official_language -> language,
		"description": description[0]{
			children[0]{text}
		},
		"image": gallery {
			asset -> {url}
		}
	}`;
	const countries = await sanity.fetch(query);

	return countries;
}
