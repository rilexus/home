import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './page-subtitle-component.style.scss';



const PageSubtitleComponent = ({subtitle, comment, url, shrink}) => {
	return(
		<section className={['page-subtitle', shrink ? 'shrink' : ''].join(' ')}>
			<CSSTransition
				appear
				in
				timeout={400}
				classNames={'appear-grow'}
			>
				<div
					style={{backgroundImage: `url("${url}")`}}
					className={['section-title'].join(' ')}
					id={'page-subtitle'}>
					{subtitle}
				</div>
			</CSSTransition>
			<div className="section-subtitle">
				{comment}
			</div>
		</section>
	);
};

export default PageSubtitleComponent;