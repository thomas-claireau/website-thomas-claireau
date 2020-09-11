import React from 'react';

import { sidebar } from './index.module.scss';

import SidebarInfo from 'components/global/Sidebar/SidebarInfo';

export default function Sidebar({ projet }) {
	return (
		<div className={sidebar}>
			<h1>{projet.header.title}</h1>
			<p className="description">{projet.short_description}</p>
			<ul>
				<SidebarInfo label="Année" value={projet.year.getFullYear()} />
				<SidebarInfo label="Catégories" value={projet.categories} multiple />
				<SidebarInfo label="Technologies" value={projet.technologies} multiple />
				<SidebarInfo label="Github" value={projet.github} link github />
				<SidebarInfo label="Lien externe" value={projet.link} link />
			</ul>
		</div>
	);
}
