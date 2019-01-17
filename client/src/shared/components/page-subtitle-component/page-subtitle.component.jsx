import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './page-subtitle-component.style.scss';




const PageSubtitleComponent = ({subtitle, comment, url, shrink}) => {
	return(
			<div className={['page-subtitle', shrink ? 'shrink' : ''].join(' ')}>
				<CSSTransition
					appear
					in={!shrink}
					timeout={400}
					classNames={'appear-grow'}
				>
					<div className="subtitle-wrapper">
						<h1 style={{
							backgroundImage: `url("${url}")`,
							backgroundColor: url? 'transparent' : 'black'
						}}
						     className={['section-title'].join(' ')}
						     id={'page-subtitle'}>
							{subtitle}
						</h1>
						<div className="section-subtitle">
							{comment}
						</div>
					</div>
				</CSSTransition>
			</div>
	);
};

export default PageSubtitleComponent;