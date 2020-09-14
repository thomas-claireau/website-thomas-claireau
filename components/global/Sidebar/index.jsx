import React from 'react';

import { sidebar } from './index.module.scss';

import SidebarInfo from 'components/global/Sidebar/SidebarInfo';
import SlashDate from 'utils/SlashDate';

export default function Sidebar({ view, data }) {
	return (
		<div className={sidebar}>
			<h1>{data.header.title}</h1>
			<p className="description">{data.header.meta_description}</p>
			<ul>
				{view == 'projet' && (
					<>
						<SidebarInfo label="Année" value={data.year.getFullYear()} />
						<SidebarInfo label="Catégories" value={data.categories} multiple />
						<SidebarInfo label="Technologies" value={data.technologies} multiple />
						<SidebarInfo label="Github" value={data.github} link github />
						<SidebarInfo label="Lien externe" value={data.link} link />
					</>
				)}

				{view == 'post' && (
					<>
						<SidebarInfo value={data.user} avatar />
						<SidebarInfo label="Date" value={<SlashDate date={data.created_at} />} />
						<SidebarInfo label="Technologies" value={data.technologies} multiple flex />
						<SidebarInfo label="Partagez" value={data.share} multiple flex share />
					</>
				)}
			</ul>
		</div>
	);
}

/**
 * https://www.facebook.com/share.php?u=http://bit.ly/vOKpgC
 * https://twitter.com/intent/tweet?text=TITLE&url=URL&hashtags=TECHNO_1,TECHNO_2
 * https://www.linkedin.com/sharing/share-offsite/?url=http://bit.ly/vOKpgC
 */
