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
		}
		projets {
			id
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
			slug
			date: year
			github_href
			github_text
			link
			resume
			others_images {
				id
				alt: alternativeText
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
