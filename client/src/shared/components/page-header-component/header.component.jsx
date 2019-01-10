import React from 'react';
import { CSSTransition} from 'react-transition-group';
import './header-component.style.scss';
import {Link, withRouter} from "react-router-dom";
import HeaderLinkComponent from "./link-component/header-link.component";
import {pages} from "../../../App";



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
				<Link to={'/start'}>Stanislav</Link>
				<div className={'links-wrapper'}>
					{
                        [...pages].map(({title, id, url}, idx) => {
                            return(
                                <HeaderLinkComponent
                                    key={`page_link${id}_${idx}`}
                                    to={url} text={title}/>
                            );
                        })
                    }
				</div>
			</header>
		</CSSTransition>
	);
};

export default withRouter(HeaderComponent);