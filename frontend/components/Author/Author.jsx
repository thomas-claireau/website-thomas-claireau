import PropTypes from 'prop-types';
import moment from 'moment';

import style from './Author.module.scss';

export default function Author({ className, item }) {
	return (
		<div className={`${className} ${style['author']}`}>
			<div className={style['avatar']}>
				<img src={item.User.avatar} alt="" />
			</div>
			<div className={style['infos']}>
				<h4>
					{item.User.firstname} {item.User.lastname}
				</h4>
				<div>
					<span className={style['date']}>
						{moment(item.updatedAt).format('D MMMM YYYY')}
					</span>
					<span className={style['time']}>
						&nbsp;&nbsp;{item.read} min read
					</span>
				</div>
			</div>
		</div>
	);
}

Author.propTypes = {
	className: PropTypes.string,
	item: PropTypes.object.isRequired,
};
