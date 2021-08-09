import style from './Sidebar.module.scss';
import Sticky from 'react-stickynode';

import SocialShare from '../SocialShare/SocialShare';
import SocialProof from '../SocialProof/SocialProof';

export default function Sidebar() {
	return (
		<Sticky enabled={true} top={50}>
			<div className={style['sidebar']}>
				<SocialShare direction="vertical" />
				<SocialProof direction="vertical" />
			</div>
		</Sticky>
	);
}
