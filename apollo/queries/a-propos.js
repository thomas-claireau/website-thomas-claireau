import gql from 'graphql-tag';

const A_PROPOS_QUERY = gql`
	query {
		a_propos: aPropo {
			header {
				title
				meta_title
				meta_description
			}
			left_content {
				language {
					id
					main_image {
						name
						url
					}
					others_images {
						id
						name
						url
					}
				}
			}
			right_content {
				description
			}
		}
	}
`;

export default A_PROPOS_QUERY;
