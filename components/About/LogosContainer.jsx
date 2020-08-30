import styled from '@emotion/styled';
import Svg from 'utils/svg';
import { motion } from 'framer-motion';

function Logos({ obj }) {
	return (
		<>
			<div className="parent" title={obj.main_language.technologie}>
				<Svg url={obj.main_language.logo.url} />
			</div>
			<div className="childrens">
				{obj.others_languages.map((item) => {
					return <Svg key={item.id} url={item.logo.url} />;
				})}
			</div>
		</>
	);
}

export default function LogosContainer({ languages }) {
	const LogosContainerStyled = styled.div`
		div {
			width: fit-content;
			display: flex;
			justify-content: center;
			align-items: center;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				width: auto;
			}

			&.parent {
				width: auto;
			}
		}

		> div {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			&.bottom {
				margin-top: 80px;
				justify-content: space-between;
				flex-direction: row;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					margin-top: 20px;
					flex-direction: column;
				}

				> .right {
					margin-left: 100px;

					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large']}) {
						margin-left: 0px;
					}
				}
			}

			&.top {
				width: 100%;

				> div {
					flex-direction: row;
				}

				.childrens svg {
					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large']}) {
						margin-left: 0;
					}
				}
			}

			> div {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					flex-direction: row;
				}

				&:not(:first-of-type) {
					@media screen and (max-width: ${(props) =>
							props.theme.breakpoints['break-large']}) {
						margin-top: 25px;
					}
				}

				> .childrens {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}

		.parent {
			&:hover {
				+ .childrens {
					svg {
						filter: grayscale(0%);
					}
				}
			}

			svg {
				width: auto;
				height: 130px;

				@media screen and (max-height: 730px) {
					height: 100px;
				}

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					height: 100px;
				}

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-tablet']}) {
					height: 60px;
				}
			}
		}

		.childrens {
			margin-top: 25px;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				margin-top: 0px;
			}

			.svg-container {
				&:not(:first-of-type) {
					margin-left: 20px;
				}
			}

			svg {
				width: auto;
				min-height: 60px;
				height: 60px;
				filter: grayscale(100%);
				transition: all 0.3s ease-in-out;

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-large']}) {
					margin-left: 20px;
					filter: grayscale(0%);
				}

				@media screen and (max-width: ${(props) =>
						props.theme.breakpoints['break-small']}) {
					min-height: 40px;
					height: 40px;
				}

				@media screen and (max-width: ${(props) => props.theme.breakpoints['break-mini']}) {
					min-height: 30px;
					height: 30px;
				}

				&:hover {
					filter: grayscale(0%);
					transition: all 0.3s ease-in-out;
				}
			}
		}
	`;

	const transition = {
		hidden: { opacity: 0, y: '-100%' },
		visible: { opacity: 1, y: 0 },
	};

	const top = languages[0];
	const bottom = languages.filter((item, index) => index !== 0);

	return (
		<LogosContainerStyled>
			<motion.div className="top" variants={transition} initial="hidden" animate="visible">
				<Logos obj={top} />
			</motion.div>
			<motion.div className="bottom" variants={transition} initial="hidden" animate="visible">
				<div className="left">
					<Logos obj={bottom[0]} />
				</div>
				<div className="right">
					<Logos obj={bottom[1]} />
				</div>
			</motion.div>
		</LogosContainerStyled>
	);
}
