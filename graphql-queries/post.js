import gql from 'graphql-tag';

const POST_QUERY = gql`
	query Post($slug: String!) {
		posts(where: { slug: $slug }) {
			header {
				title
				meta_title
				meta_description
			}
			created_at
			updated_at
			user {
				username
				name
				avatar {
					url
					caption
				}
			}
			main_image {
				url
				caption
			}
			content
			technologies {
				id
				technologie
				logo {
					url
					caption
				}
			}
		}
	}
`;

export default POST_QUERY;
