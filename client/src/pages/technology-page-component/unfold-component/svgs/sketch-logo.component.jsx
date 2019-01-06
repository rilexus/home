import React from 'react';


const SketchStatelessComponent = (props) => {
	return (
		<svg viewBox="0 0 500 500">
			<g>
				<path fill="#FFAE00" d="M247 447L0 160 107 15 247 0l140 15 107 145z"/>
				<path fill="#EC6C00" d="M247 447L0 160h494z"/>
				<path fill="#FFAE00" d="M247 447L100 160h294z"/>
				<path fill="#FFEFB4" d="M247 0L100 160h294z"/>
				<path fill="#FFAE00" d="M107 15L52 88 0 160h101zM387 15l55 73 52 72H393z"/>
				<path fill="#FED305" d="M107 15l-7 145L247 0zM387 15l7 145L247 0z"/>
			</g>
		</svg>
	);
};

export default SketchStatelessComponent;