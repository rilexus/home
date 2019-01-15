import React from 'react';
import { CSSTransition } from 'react-transition-group';
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
				<h3>
					{
						title
					}
				</h3>
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