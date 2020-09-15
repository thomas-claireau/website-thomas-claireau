import gql from 'graphql-tag';

const PROJETS_QUERY = gql`
	query {
		meta: listeProjet {
			header {
				title
				meta_title
				meta_description
				main_image {
					url
					caption
				}
				user {
					username
					name
					avatar {
						url
						caption
					}
				}
			}
		}
		projets {
			id
			header {
				title
				meta_title
				meta_description
				main_image {
					url
					caption
				}
				user {
					username
					name
					avatar {
						url
						caption
					}
				}
			}
			slug
			date: year
			github
			link
			resume
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
