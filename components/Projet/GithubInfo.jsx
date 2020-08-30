import { useLayoutEffect, useState } from 'react';
import styled from '@emotion/styled';
import fetch from 'isomorphic-unfetch';
import Svg from 'utils/svg';

function SlashDate({ date }) {
	date = new Date(date);

	const year = date.getFullYear();
	const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
	const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

	return <span>{`${day}/${month}/${year}`}</span>;
}

export default function GithubInfo({ bg, github, languages }) {
	const GithubInfoStyled = styled.div`
		width: 100%;
		position: relative;
		margin-top: 60px;
		padding: 50px 0;
		background-image: url(${bg});
		background-size: cover;
		background-position: center;

		&:before {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: #000;
			opacity: 0.7;
			z-index: 0;
		}

		> * {
			position: relative;
			color: #fff;
		}

		h2 {
			font-size: 40px;
		}

		> .content {
			padding: 0 200px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			> div > *:first-of-type {
				margin-top: 0;
				padding-top: 0;
			}

			.top,
			.bottom {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-column-gap: 100px;
				align-items: flex-end;
			}

			.bottom {
				margin-top: 20px;
			}

			.stats {
				span {
					display: block;
					font-weight: 500;
					font-size: 25px;
				}

				p {
					margin: 0;
					padding: 0;
					font-weight: 300;
				}

				.languages {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-top: 5px;

					.svg-container {
						width: 40px;
						height: auto;

						&:not(:first-of-type) {
							margin-left: 10px;
						}

						svg {
							width: 100%;
							height: 100%;

							#wordpress path {
								fill: #fff;
							}
						}
					}
				}
			}

			i.right {
				font-size: 150px;
				font-weight: 300;
			}
		}
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
									<p>Lignes de code</p>
								</div>
								<div>
									<div className="languages">
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
									<p>Technologies</p>
								</div>
							</div>
							<div className="bottom">
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
		</GithubInfoStyled>
	);
}
