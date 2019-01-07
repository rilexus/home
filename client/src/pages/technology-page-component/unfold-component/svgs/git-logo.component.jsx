import React from 'react';


const GitStatelessComponent = (props) => {
	return (
		<svg version="1" viewBox="0 0 96 96">
			<defs>
				<path id="a" d="M0 0h92v92H0z"/>
			</defs>
			<g fill="none" fillRule="evenodd">
				<mask id="b" fill="#fff">
					<use xlinkHref="#a"/>
				</mask>
				<path fill="#DE4C36" d="M90 42L50 2c-2-2-6-2-8 0l-9 8 11 11a7 7 0 0 1 9 9l10 10a7 7 0 1 1-4 4L49 34v25l2 2a7 7 0 1 1-8-2V34l-2-2c-2-2-2-5-1-7L29 14 2 42c-3 2-3 6 0 8l40 40c2 3 6 3 8 0l40-40c2-2 2-6 0-8" mask="url(#b)"/>
			</g>
		</svg>
	);
};

export default GitStatelessComponent;