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
					color: ${theme.colors.primary};
				}

				.--light {
					color: ${theme.colors.secondary};
				}

				.--uppercase {
					text-transform: uppercase;
				}
			`}
		/>
	</>
);

export { Modifier };
