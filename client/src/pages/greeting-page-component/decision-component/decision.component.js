import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './decision.component.style.scss';



const DecisionComponent = (props) => {
	return(
		<CSSTransition
			timeout={200}
			in
			appear
			classNames={'grow'}
		>
			<div className={'decision-component'}>
				<div className={'decision-wrapper'} onClick={()=>props.onClick()}>
					<span className={'option yes'} role={'img'}>👍</span>
					<br/>
					<span className={'word'}>(sure)</span>
				</div>
				<div className={'decision-wrapper'}>
					<span className={'option no'} role={'img'} >👎</span>
					<br/>
					<span className={'word'}>(naah)</span>
				</div>
			</div>
		</CSSTransition>
	);
};

export default DecisionComponent;