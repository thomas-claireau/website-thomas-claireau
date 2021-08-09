import style from './SocialProof.module.scss';
import Like from '../Like/Like';
import CommentCount from '../CommentCount/CommentCount';

export default function SocialProof() {
	return (
		<div className={style['social-proof']}>
			<Like />
			<CommentCount />
		</div>
	);
}
