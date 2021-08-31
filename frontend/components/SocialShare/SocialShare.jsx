import PropTypes from 'prop-types';
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

import style from './SocialShare.module.scss';
export default function SocialShare({ direction }) {
	const [url, setUrl] = useState(null);

	useEffect(() => {
		setUrl(window.location.href);
	}, []);

	return (
		<div className={`${style['social-share']} ${style[direction]}`}>
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
	direction: PropTypes.string.isRequired,
};
