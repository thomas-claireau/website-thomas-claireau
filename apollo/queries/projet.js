import gql from 'graphql-tag';

const PROJET_QUERY = gql`
	query Projet($slug: String!) {
		projets(where: { slug: $slug }) {
			year
			github
			link
			short_description
			resume
			results
			header {
				title
				meta_title
				meta_description
			}
			main_image {
				url
				caption
			}
			others_images {
				id
				url
				caption
			}
			categories {
				id
				item: category
			}
			technologies {
				id
				item: technologie
				logo {
					url
					caption
				}
			}
		}
	}
`;

export default PROJET_QUERY;
