import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem/MenuItem';
import { icon, mobile } from '../MenuItem/MenuItem.module.scss';
import { contact, menuMobile } from './MenuMobile.module.scss';

export default function MenuMobile({ items }) {
	return (
		<nav className={menuMobile}>
			{items &&
				items.map((item, index) => {
					let content = [
						<MenuItem className={`${icon} ${mobile}`} key={index}>
							<a title={item.title} href={item.url} target={item.target}>
								<FontAwesomeIcon icon={item.class.split(' ')} />
							</a>
						</MenuItem>,
					];

					// add contact btn in the middle
					if (index == 1) {
						content.push(
							<MenuItem className={`${contact} ${mobile}`} key="contact">
								<a href="mailto:pro.thomas.claireau@gmail.com?subject=Demande de contact&body=Nom et prénom : %0D%0A%0D%0ABudget : %0D%0A%0D%0A Description du projet : %0D%0A">
									<FontAwesomeIcon icon={['far', 'envelope-open']} />
								</a>
							</MenuItem>
						);
					}

					return content;
				})}
		</nav>
	);
}

MenuMobile.propTypes = {
	items: PropTypes.array,
};
