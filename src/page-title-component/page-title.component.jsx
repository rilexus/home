import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './page-title-component.style.scss';



const PageTitleComponent = (props) => {
	return(
		<CSSTransition
			appear
			in
			timeout={400}
			mountOnEnter
			unmountOnExit
			classNames={'page-title-animation'}
		>
			<div className={'page-title-component'}>
				{
					props.title
				}
				<span>
					{
						props.comment
					}
				</span>
			</div>
		</CSSTransition>
	);
};

export default PageTitleComponent;