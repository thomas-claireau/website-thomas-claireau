import gql from 'graphql-tag';

const BLOG_QUERY = gql`
	query {
		blog {
			header {
				title
				meta_title
				meta_description
			}
		}
		posts {
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
				technologie
				logo {
					url
					caption
				}
			}
		}
	}
`;

export default BLOG_QUERY;
