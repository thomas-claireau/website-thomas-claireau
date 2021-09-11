import Sticky from 'react-sticky-box';
import SocialShare from '../SocialShare/SocialShare';

export default function Sidebar() {
	return (
		<Sticky offsetTop={85}>
			<div>
				<SocialShare direction="vertical" />
				{/* <SocialProof direction="vertical" /> */}
			</div>
		</Sticky>
	);
}
