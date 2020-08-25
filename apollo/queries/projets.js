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
			title
			date: year
			github
			link
			short_description
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
