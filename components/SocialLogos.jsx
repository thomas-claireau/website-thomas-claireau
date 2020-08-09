import styled from '@emotion/styled';
import Header from 'components/Header';

export default function SocialLogos({ className, items }) {
	const SocialLogosStyled = styled.div`
		&.desktop {
			position: absolute;
			top: 50%;
			right: 19px;
			transform: translateY(-50%);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			@media screen and (max-width: ${(props) => props.theme.breakpoints['break-large']}) {
				display: none;
			}

			a {
				&:not(:first-of-type) {
					margin-top: 15px;
				}

				i {
					color: ${(props) => props.theme.colors.light};
					font-size: 20px;
				}
			}
		}

		&.mobile {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-top: 80px;

			a {
				&:not(:first-of-type) {
					margin-left: 20px;
				}

				i {
					color: ${(props) => props.theme.colors.dark};
					font-size: 25px;
				}
			}
		}
	`;

	return (
		<SocialLogosStyled className={`social-logos ${className}`}>
			{items.map((item) => {
				const { id, picto_slug_fontawesome, link } = item;

				if (id && picto_slug_fontawesome && link) {
					return (
						<a key={id} href={link} target="_blank" rel="noopener noreferrer">
							<i className={picto_slug_fontawesome} aria-hidden="true"></i>
						</a>
					);
				}
			})}
		</SocialLogosStyled>
	);
}
