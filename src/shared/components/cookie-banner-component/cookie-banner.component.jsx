import React, {Component} from 'react';
import './cookie-banner-component.scss';
import {CSSTransition} from 'react-transition-group';


class CookieBannerComponent extends Component {
	
	state = {
		visible: true
	};
	
	hideBanner() {
		this.setState(s => ({
			...s,
			visible: false
		}));
	}
	
	render() {
		return (
			<div className={'cookie-banner-component'}>
				<CSSTransition
					in={this.state.visible}
					appear
					timeout={200}
					unmountOnExit
					mountOnEnter
					classNames={'cookie-banner-component-animation'}
				>
					<div className={'cookie-banner-content-wrapper'}>
						<button onClick={e => this.hideBanner()}>OK</button>
						<div className="cookie-banner-text-wrapper">
							<span>
								No cookies here
							</span>
						</div>
					</div>
				
				</CSSTransition>
			
			</div>
		
		);
	}
}

export default CookieBannerComponent;