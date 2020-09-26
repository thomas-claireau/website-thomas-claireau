import gql from 'graphql-tag';

const A_PROPOS_QUERY = gql`
	query {
		a_propos: aPropo {
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
			left_content {
				language {
					main_language {
						technologie
						logo {
							name
							url
						}
					}
					others_languages {
						id
						technologie
						logo {
							name
							url
						}
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
