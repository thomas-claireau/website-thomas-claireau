import { useLayoutEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Svg from 'utils/svg';
import SlashDate from 'utils/SlashDate';

import styles, { content, top, bottom, stats, left } from './index.module.scss';

export default function GithubInfo({ bg, github, languages }) {
	const [lines, setLines] = useState(null);

	const auth = process.browser
		? btoa(`${process.env.GITHUB_USER}:${process.env.GITHUB_TOKEN}`)
		: null;

	const options = {
		mode: 'cors',
		headers: {
			Authorization: 'Basic ' + auth,
		},
	};

	console.log(`${process.env.GITHUB_API}/repos/${github.full_name}/stats/contributors`);

	useLayoutEffect(() => {
		fetch(`${process.env.GITHUB_API}/repos/${github.full_name}/stats/contributors`, options)
			.then((response) => response.json())
			.then((contributors) => {
				if (Object.keys(contributors).length !== 0) {
					return contributors.map((contributor) =>
						contributor.weeks.reduce(
							(lineCount, week) => lineCount + week.a - week.d,
							0
						)
					);
				}
			})
			.then((lineCounts) => {
				console.log(lineCounts);
				if (lineCounts) {
					return lineCounts.reduce((lineTotal, lineCount) => lineTotal + lineCount);
				}
			})
			.then((lines) => {
				if (lines) {
					setLines(lines);
				}
			});
	}, []);

	if (github && lines && languages) {
		return (
			<div className={styles['github-info']} style={{ backgroundImage: `url(${bg})` }}>
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
										{languages.map((language, index) => {
											if (index > 4) return null;

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
			</div>
		);
	} else {
		return null;
	}
}
