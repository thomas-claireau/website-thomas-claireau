import Sticky from 'react-sticky-box';

import SocialShare from '../SocialShare/SocialShare';
import SocialProof from '../SocialProof/SocialProof';

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
