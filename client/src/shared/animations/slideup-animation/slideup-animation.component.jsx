import React from 'react';
import {CSSTransition} from "react-transition-group";
import './slideup-animation-component.style.scss';



const SlideupAnimationComponent = ({children, duration, _in, timeout}) => {
	return(
		<CSSTransition
			in={_in}
			appear
			timeout={timeout ? timeout : 1}
			
			classNames={'slideup-animation-component-animation'}
		>
			<div className={'slideup-animation-component'}
			     style={{transitionDuration: `${duration ? duration : 400 }ms`}}
			>
				{children}
			</div>
		</CSSTransition>
	);
};

export default SlideupAnimationComponent;