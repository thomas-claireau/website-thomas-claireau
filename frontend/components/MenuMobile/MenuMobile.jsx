import PropTypes from 'prop-types';

import MenuItem from '../MenuItem/MenuItem';

import { menuMobile, contact } from './MenuMobile.module.scss';
import { icon, mobile } from '../MenuItem/MenuItem.module.scss';

export default function MenuMobile({ items }) {
	return (
		<nav className={menuMobile}>
			{items &&
				items.map((item, index) => {
					let content = [
						<MenuItem className={`${icon} ${mobile}`} key={index}>
							<a title={item.title} href={item.url} target={item.target}>
								<i className={item.class}></i>
							</a>
						</MenuItem>,
					];

					// add contact btn in the middle
					if (index == 1) {
						content.push(
							<MenuItem className={`${contact} ${mobile}`} key="contact">
								<a href="#contact">
									<i className="far fa-envelope-open"></i>
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
