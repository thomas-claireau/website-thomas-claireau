import gql from 'graphql-tag';

const MENTIONS_LEGALES_QUERY = gql`
	query {
		mentions_legales: mentionsLegale {
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
			description
		}
	}
`;

export default MENTIONS_LEGALES_QUERY;
