import Sticky from 'react-sticky-box';
import SocialShare from '../SocialShare/SocialShare';
import style from './Sidebar.module.scss';

export default function Sidebar() {
	return (
		<Sticky className={style['sidebar']} offsetTop={85}>
			<div>
				<SocialShare direction="vertical" />
				{/* <SocialProof direction="vertical" /> */}
			</div>
		</Sticky>
	);
}
