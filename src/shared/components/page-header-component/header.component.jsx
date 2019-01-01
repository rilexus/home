import React from 'react';
import { CSSTransition} from 'react-transition-group';
import './header-component.style.scss';
import {Link, withRouter} from "react-router-dom";
import HeaderLinkComponent from "./link-component/header-link.component";




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
					<div className={'links'}>
						{/*<div className={'link'}>*/}
							{/*<Link to={'/contact'}>Contact</Link>*/}
							{/*<span className={'layer_1'}/>*/}
							{/*<span className={'layer_2'}/>*/}
							{/*<span className={'layer_3'}/>*/}
						{/*</div>*/}
						{/*<div className={'link'}>*/}
							{/*<Link to={'/technology'}>Technology</Link>*/}
						{/*</div>*/}
                        {/*<div className={'link'}>*/}
							{/*<Link to={'/bio'}>Bio</Link>*/}

						{/*</div>*/}
						<HeaderLinkComponent to={'/contact'} text={'Contact'}/>
                        <HeaderLinkComponent to={'/technology'} text={'Technology'}/>
                        <HeaderLinkComponent to={'/bio'} text={'Bio'}/>
					</div>
				</div>
			</header>
		</CSSTransition>
	);
};

export default withRouter(HeaderComponent);