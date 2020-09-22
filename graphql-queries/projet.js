import gql from 'graphql-tag';

const PROJET_QUERY = gql`
	query Projet($slug: String!) {
		projets(where: { slug: $slug }) {
			year
			github
			link
			resume
			results
			created_at
			updated_at
			header {
				title
				meta_title
				meta_description
				main_image {
					url
					alt: alternativeText
					caption
				}
				user {
					username
					name
					avatar {
						url
						alt: alternativeText
						caption
					}
				}
			}
			others_images {
				id
				url
				alt: alternativeText
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
					alt: alternativeText
					caption
				}
			}
		}
	}
`;

export default PROJET_QUERY;
