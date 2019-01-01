import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './page-title-component.style.scss';



const PageTitleComponent = ({title, comment}) => {
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
					title
				}
				<span>
					{
						comment
					}
				</span>
			</div>
		</CSSTransition>
	);
};

export default PageTitleComponent;