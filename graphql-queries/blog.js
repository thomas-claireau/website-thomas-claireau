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

export default BLOG_QUERY;
