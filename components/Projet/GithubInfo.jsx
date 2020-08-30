import { useLayoutEffect, useState } from 'react';
import styled from '@emotion/styled';
import fetch from 'isomorphic-unfetch';
import Svg from 'utils/svg';

export default function GithubInfo({ github, languages }) {
	const GithubInfoStyled = styled.div`
		margin-top: 60px;
		/* background-image: url() */
	`;

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
		<GithubInfoStyled>
			{github && lines && languages && (
				<div className="content">
					<div className="left">
						<h2>Résumé</h2>
						<div className="stats">
							<div className="top">
								<div>
									<span>{lines}</span>
									Lignes de code
								</div>
								<div>
									{languages.map((language) => {
										return (
											<Svg
												key={language.id}
												url={language.logo.url}
												title={language.item}
											/>
										);
									})}
								</div>
							</div>
							<div className="bottom">
								<div>
									<span>{github.created_at}</span>
									Création
								</div>
								<div>
									<span>{github.updated_at}</span>
									Modification
								</div>
							</div>
						</div>
					</div>
					<i className="fa fa-github-alt right" aria-hidden="true"></i>
				</div>
			)}
		</GithubInfoStyled>
	);
}
