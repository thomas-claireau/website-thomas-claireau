import gql from 'graphql-tag';

const POST_QUERY = gql`
	query Post($slug: String!) {
		posts(where: { slug: $slug }) {
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
			created_at
			updated_at
			content
			technologies {
				id
				technologie
				logo {
					url
					alt: alternativeText
					caption
				}
			}
		}
	}
`;

export default POST_QUERY;
