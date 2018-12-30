import React from 'react';
import { CSSTransition} from 'react-transition-group';
import './header-component.style.scss';




const HeaderComponent = (props) => {
	return(
		<CSSTransition
			in
			appear
			timeout={400}
			mountOnEnter
			classNames={'header-component-animation'}
		>
			<header className={'header-component'}>
				<div className={'head-content-wrapper'}>
					<span className={'name-logo'}>Stanislav</span>
					<span>
						<i>Contact</i>
					</span>
				</div>
			</header>
		</CSSTransition>
	);
};

export default HeaderComponent;