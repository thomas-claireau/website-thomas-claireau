import moment from 'moment';
import PropTypes from 'prop-types';
import FantomImage from '../FantomImage/FantomImage';
import style from './Author.module.scss';

export default function Author({ className, post }) {
	return (
		<div className={`${className} ${style['author']}`}>
			<div className={style['avatar']}>
				<FantomImage
					src={post.author.avatar.url}
					alt={post.author.avatar.alt}
					width={50}
					height={50}
				/>
			</div>
			<div className={style['infos']}>
				<h4>{post.author.name}</h4>
				<div>
					<span className={style['date']}>
						{moment(post.updated_at).format('D MMMM YYYY')}
					</span>
				</div>
			</div>
		</div>
	);
}

Author.propTypes = {
	className: PropTypes.string,
	post: PropTypes.object.isRequired,
};
