import { useLayoutEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Svg from 'utils/svg';

import styles, { content, top, bottom, stats, left } from './index.module.scss';

function SlashDate({ date }) {
	date = new Date(date);

	const year = date.getFullYear();
	const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

	return <span>{`${day}/${month}/${year}`}</span>;
}

export default function GithubInfo({ bg, github, languages }) {
	const [lines, setLines] = useState(null);

	const auth = btoa(`${process.env.GITHUB_USER}:${process.env.GITHUB_TOKEN}`);

	const options = {
		mode: 'cors',
		headers: {
			Authorization: 'Basic ' + auth,
		},
	};

	useLayoutEffect(() => {
		fetch(`${process.env.GITHUB_API}/repos/${github.full_name}/stats/contributors`, options)
			.then((response) => response.json())
			.then((contributors) =>
				contributors.map((contributor) =>
					contributor.weeks.reduce((lineCount, week) => lineCount + week.a - week.d, 0)
				)
			)
			.then((lineCounts) =>
				lineCounts.reduce((lineTotal, lineCount) => lineTotal + lineCount)
			)
			.then((lines) => setLines(lines));
	}, []);

	return (
		<div className={styles['github-info']} style={{ backgroundImage: `url(${bg})` }}>
			{github && lines && languages && (
				<div className={content}>
					<div className={left}>
						<h2>
							Résumé
							<i className="fa fa-github-alt" aria-hidden="true"></i>
						</h2>
						<div className={stats}>
							<div className={top}>
								<div>
									<span>{lines}</span>
									<p>Lignes de code</p>
								</div>
								<div>
									<div className={styles.languages}>
										{languages.map((language) => {
											return (
												<Svg
													className={styles['svg-container']}
													key={language.id}
													url={language.logo.url}
													title={language.item}
												/>
											);
										})}
									</div>
									<p>Technologies</p>
								</div>
							</div>
							<div className={bottom}>
								<div>
									<SlashDate date={github.created_at} />
									<p>Création</p>
								</div>
								<div>
									<SlashDate date={github.updated_at} />
									<p>Modification</p>
								</div>
							</div>
						</div>
					</div>
					<i className="fa fa-github-alt right" aria-hidden="true"></i>
				</div>
			)}
		</div>
	);
}
