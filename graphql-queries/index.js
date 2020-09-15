import gql from 'graphql-tag';

const INDEX_QUERY = gql`
	query {
		accueil {
			titre_haut_gauche
			titre_haut_droite
			titre_bas_gauche
			titre_bas_droite
			description_gauche
			description_droite
			titre_mobile
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
			slide_work {
				title
				view_all_label
				view_all_link
				projet_relation {
					projet {
						id
						header {
							title
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
					}
				}
			}
		}
	}
`;

export default INDEX_QUERY;
