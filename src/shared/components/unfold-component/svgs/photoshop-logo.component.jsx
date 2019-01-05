import React from 'react';


const PhotoshopStatelessComponent = (props) => {
	return (
		<svg version="1" viewBox="-362 459 500 500">
			<radialGradient id="a" cx="-1003" cy="1089" r="1"
			                gradientTransform="matrix(545.6736 0 0 -528.3113 547072 575749)"
			                gradientUnits="userSpaceOnUse">
				<stop offset="0" stopColor="#34364e"/>
				<stop offset="1" stopColor="#0c0824"/>
			</radialGradient>
			<path fill="url(#a)" d="M-342 493h458v445h-458V493z"/>
			<path fill="#31C5F0"
			      d="M-342 493h458v445h-458V493zm-20 466h499V473h-499v486zm336-287c-16 0-22 9-22 15 0 8 4 13 26 25 33 15 43 31 43 53 0 33-26 51-60 51-18 0-34-4-43-9l-1-3v-31c0-2 1-3 2-2 13 9 28 13 42 13 16 0 23-7 23-17 0-7-4-14-25-25-30-14-42-28-42-52 0-27 21-49 57-49 18 0 31 3 37 6 2 1 2 2 2 4v28c0 2-1 3-3 2-9-5-22-9-36-9zm-179 25h17c24 0 47-8 47-41 0-27-16-40-44-40l-20 1v80zm-37-110c0-2 3-3 5-3l53-1c58 0 80 32 80 72 0 53-38 75-85 75h-16v80l-2 2h-32c-2 0-3 0-3-2V587z"/>
		</svg>
	);
};

export default PhotoshopStatelessComponent;