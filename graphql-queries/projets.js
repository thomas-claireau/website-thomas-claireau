import gql from 'graphql-tag';

const PROJETS_QUERY = gql`
	query {
		liste_projets: listeProjet {
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
			projets_list {
				projet {
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
					liste_projets
					link
					resume
					others_images {
						nom_projet
						lien_projet
						image {
							id
							alt: alternativeText
							caption
							url
						}
					}
				}
			}
		}
	}
`;

export default PROJETS_QUERY;
