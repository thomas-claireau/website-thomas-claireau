import Svg from 'utils/svg';

export default function SidebarInfo({ label, value, link, multiple }) {
	if (!label || !value || !value.length) return null;

	if (multiple) {
		return (
			<li>
				<div className="label">{label}</div>
				{value.map((data) => {
					const { id, item, logo } = data;

					return (
						<div key={id} className="value">
							{logo && <Svg url={logo.url} />}
							{item}
						</div>
					);
				})}
			</li>
		);
	}

	return (
		<li>
			<div className="label">{label}</div>
			{link ? (
				<a href={value} target="_blank" rel="noopener noreferrer" className="value">
					{value}
				</a>
			) : (
				<div className="value">{value}</div>
			)}
		</li>
	);
}
