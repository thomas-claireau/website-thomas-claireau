import React from 'react';
import styled from '@emotion/styled';

import SidebarInfo from 'components/Projet/SidebarInfo';

export default function Sidebar({ projet }) {
	const SidebarStyled = styled.div`
		h1 {
			font-size: 40px;
		}

		ul {
			padding: 0;

			li {
				list-style-type: none;
				font-size: 17px;

				&:not(:first-of-type) {
					margin-top: 25px;
				}

				.label {
					font-weight: 300;
					margin-bottom: 3px;
				}

				.value {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					font-weight: 600;
					color: ${(props) => props.theme.colors.light};

					&:not(:first-of-type) {
						margin-top: 5px;
					}

					svg {
						width: 20px;
						height: 20px;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-right: 10px;
					}
				}
			}
		}
	`;

	return (
		<SidebarStyled>
			<h1>{projet.header.title}</h1>
			<p className="description">{projet.short_description}</p>
			<ul>
				<SidebarInfo label="Année" value={projet.year.getFullYear()} />
				<SidebarInfo label="Catégories" value={projet.categories} multiple />
				<SidebarInfo label="Technologies" value={projet.technologies} multiple />
				<SidebarInfo label="Github" value={projet.github} link />
				<SidebarInfo label="Lien externe" value={projet.link} link />
			</ul>
		</SidebarStyled>
	);
}
