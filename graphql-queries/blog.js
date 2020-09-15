import gql from 'graphql-tag';

const BLOG_QUERY = gql`
	query {
		blog {
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
		}
		posts {
			id
			slug
			time
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
			created_at
			updated_at
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
