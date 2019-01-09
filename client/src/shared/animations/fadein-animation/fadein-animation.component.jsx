import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './fadein-animation-component.style.scss'



const FadeinAnimationComponent = ({children, timeout, duration, _in}) => {
	return(
		<CSSTransition
			in={_in}
			appear
			timeout={timeout ? timeout : 1}
			classNames={'fadein-animation'}
		>
			<div className={'fadein-animation-wrapper'}
			     style={{ transitionDuration: `${duration}ms`}}
			>
				{
					children
				}
			</div>
		</CSSTransition>
	);
};

export default FadeinAnimationComponent;