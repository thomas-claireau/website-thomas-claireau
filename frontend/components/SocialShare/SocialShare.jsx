import PropTypes from 'prop-types';
import style from './SocialShare.module.scss';

import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import { useState, useEffect } from 'react';

export default function SocialShare({ id }) {
	const [url, setUrl] = useState(null);

	useEffect(() => {
		setUrl(window.location.href);
	}, []);

	return (
		<div className={style['social-share']}>
			<EmailShareButton url={url}>
				<EmailIcon round />
			</EmailShareButton>
			<FacebookShareButton url={url}>
				<FacebookIcon round />
			</FacebookShareButton>
			<LinkedinShareButton url={url}>
				<LinkedinIcon round />
			</LinkedinShareButton>
			<TwitterShareButton url={url}>
				<TwitterIcon round />
			</TwitterShareButton>
		</div>
	);
}

SocialShare.propTypes = {
	id: PropTypes.number.isRequired,
};
