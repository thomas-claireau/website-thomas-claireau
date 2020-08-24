import gql from 'graphql-tag';

const GLOBAL_QUERY_APP = gql`
	query {
		global: globalInformation {
			meta_data {
				title
				description
				canonical
				open_graph {
					type
					locale
					site_name
				}
				twitter {
					handle
					card_type
					avatar {
						url
					}
				}
			}
		}
	}
`;

export default GLOBAL_QUERY_APP;
