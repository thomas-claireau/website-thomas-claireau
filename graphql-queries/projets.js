import gql from 'graphql-tag';

const PROJETS_QUERY = gql`
	query {
		meta: listeProjet {
			header {
				title
				meta_title
				meta_description
			}
		}
		projets {
			id
			header {
				title
				meta_title
				meta_description
			}
			slug
			date: year
			github
			link
			resume
			main_image {
				caption
				url
			}
			others_images {
				id
				caption
				url
			}
			categories {
				id
				category
			}
		}
	}
`;

export default PROJETS_QUERY;