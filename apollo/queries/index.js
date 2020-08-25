import gql from 'graphql-tag';

const INDEX_QUERY = gql`
	query {
		accueil {
			titre_haut_gauche
			titre_haut_droite
			titre_bas_gauche
			titre_bas_droite
			titre_mobile
			header {
				title
				meta_title
				meta_description
			}
			slide_work {
				title
				view_all_label
				view_all_link
				projet_relation {
					projet {
						id
						title
						main_image {
							url
						}
					}
				}
			}
		}
	}
`;

export default INDEX_QUERY;
