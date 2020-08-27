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
				url
				caption
			}
			categories {
				category
			}
			technologies {
				technologie
				logo {
					url
					caption
				}
			}
		}
	}
`;

export default PROJET_QUERY;
