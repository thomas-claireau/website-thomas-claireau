import gql from 'graphql-tag';

const MENU_QUERY = gql`
	query {
		global: globalInformation {
			menu: item_menu_desktop {
				id
				label
				link
			}
		}
	}
`;

export default MENU_QUERY;
