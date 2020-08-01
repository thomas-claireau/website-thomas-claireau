import { Global, css } from '@emotion/core';
import { theme } from './GlobalStyles';

const Modifier = () => (
	<>
		<Global
			styles={css`
				.--hide {
					position: absolute;
					opacity: 0;
					z-index: -1;
				}

				.--dark {
					color: ${theme.colors.dark};
				}

				.--bg-dark {
					background-color: ${theme.colors.dark};
				}

				.--light {
					color: ${theme.colors.light};
				}

				.--bg-light {
					background-color: ${theme.colors.light};
				}

				.--uppercase {
					text-transform: uppercase;
				}
			`}
		/>
	</>
);

export { Modifier };
