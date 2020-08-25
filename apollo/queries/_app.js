import gql from 'graphql-tag';

const GLOBAL_QUERY_APP = gql`
	query {
		global: globalInformation {
			title_box
			contact_email
			contact_label
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
			item_menu_desktop {
				id
				label
				link
			}
			menu_bottom_mobile {
				id
				label
				link
				slug_picto_fontawesome
				interne_link
			}
			social_logo {
				id
				picto_slug_fontawesome
				link
			}
		}
	}
`;

export default GLOBAL_QUERY_APP;
