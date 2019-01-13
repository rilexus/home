import React from 'react';
import './interested.style.scss';
import { CSSTransition } from 'react-transition-group';



const InterestedComponent = (props) => {
	return(
		<CSSTransition
			timeout={200}
			classNames={'interested-animation'}
			in
			appear
		>
			<div className={'interested'}>
				interested?
			</div>
		</CSSTransition>
	);
};

export default InterestedComponent;