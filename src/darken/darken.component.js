import React from 'react';
import {CSSTransition} from "react-transition-group";
import './darken.style.scss';



const DarkenComponent = (props) => {
	return(
		<React.Fragment>
			<CSSTransition
				in={props.show}
				timeout={400}
				unmountOnExit
				classNames={'interested'}>
				<div className={'text'}>AWESOME</div>
			</CSSTransition>
			
			<CSSTransition
				in={props.show}
				timeout={2000}
				unmountOnExit
				classNames={'darken-animation'}>
				<div className={'fade-bg'}/>
			</CSSTransition>
		</React.Fragment>
	);
};

export default DarkenComponent;